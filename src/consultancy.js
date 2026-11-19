// Consultancy page — interactions
(function () {
  'use strict';

  var ALLOWED_EXTENSIONS = ['pdf', 'doc', 'docx', 'jpg', 'jpeg', 'png'];
  var MAX_FILES = 3;
  var MAX_TOTAL_SIZE = 20 * 1024 * 1024; // 20MB combined
  var EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  /* ---------- Footer year ---------- */
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  /* ---------- Mobile navigation ---------- */
  var navToggle = document.getElementById('nav-toggle');
  var nav = document.getElementById('primary-nav');

  function setNavOpen(open) {
    if (!navToggle || !nav) return;
    navToggle.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('is-open', open);
    navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }

  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      var isOpen = navToggle.getAttribute('aria-expanded') === 'true';
      setNavOpen(!isOpen);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        setNavOpen(false);
      }
    });
  }

  /* ---------- Contact-only view (nav "Contact" link) ---------- */
  function applyContactOnly() {
    var contactOnly = window.location.hash === '#contact';
    document.body.classList.toggle('is-contact-only', contactOnly);
  }

  applyContactOnly();
  window.addEventListener('hashchange', applyContactOnly);

  /* ---------- Custom dropdown (replaces native select) ---------- */
  var needSelect = document.getElementById('cf-need');
  var needButton = document.getElementById('cf-need-button');
  var needListbox = document.getElementById('cf-need-listbox');
  var needValue = document.getElementById('cf-need-value');

  if (needSelect && needButton && needListbox && needValue) {
    var needOptions = Array.prototype.slice.call(needListbox.querySelectorAll('[role="option"]'));
    var needOpen = false;
    var needActiveIndex = 0;

    function needSelectedIndex() {
      var val = needSelect.value;
      for (var i = 0; i < needOptions.length; i++) {
        if (needOptions[i].getAttribute('data-value') === val) return i;
      }
      return -1;
    }

    function needSetActive(index) {
      needActiveIndex = index;
      needOptions.forEach(function (opt, i) {
        opt.classList.toggle('is-active', i === index);
      });
      needButton.setAttribute('aria-activedescendant', needOptions[index].id);
    }

    function needRender() {
      var idx = needSelectedIndex();
      var text = idx >= 0 ? needOptions[idx].textContent.trim() : 'Select an option';
      needValue.textContent = text;
      needValue.classList.toggle('is-placeholder', needSelect.value === '');
      needOptions.forEach(function (opt, i) {
        var selected = i === idx;
        opt.classList.toggle('is-selected', selected);
        opt.setAttribute('aria-selected', selected ? 'true' : 'false');
      });
    }

    function needOpenMenu() {
      needOpen = true;
      needButton.setAttribute('aria-expanded', 'true');
      needButton.classList.add('is-open');
      needListbox.hidden = false;
      var idx = needSelectedIndex();
      needSetActive(idx >= 0 ? idx : 0);
    }

    function needCloseMenu(focusTrigger) {
      needOpen = false;
      needButton.setAttribute('aria-expanded', 'false');
      needButton.classList.remove('is-open');
      needButton.removeAttribute('aria-activedescendant');
      needListbox.hidden = true;
      if (focusTrigger) needButton.focus();
    }

    function needSelectOption(index) {
      if (index < 0 || index >= needOptions.length) return;
      needSelect.value = needOptions[index].getAttribute('data-value');
      needRender();
      needCloseMenu(true);
    }

    needButton.addEventListener('click', function (e) {
      if (e.detail === 0) return; // ignore keyboard-generated clicks
      if (needOpen) { needCloseMenu(false); } else { needOpenMenu(); }
    });

    needOptions.forEach(function (opt, index) {
      opt.addEventListener('click', function () {
        needSelectOption(index);
      });
      opt.addEventListener('mousemove', function () {
        if (needOpen && needActiveIndex !== index) needSetActive(index);
      });
    });

    needButton.addEventListener('keydown', function (e) {
      var key = e.key;

      if (key === 'ArrowDown' || key === 'Enter' || key === ' ') {
        if (!needOpen) {
          e.preventDefault();
          needOpenMenu();
          return;
        }
      }

      if (!needOpen) return;

      if (key === 'ArrowDown') {
        e.preventDefault();
        needSetActive((needActiveIndex + 1) % needOptions.length);
      } else if (key === 'ArrowUp') {
        e.preventDefault();
        needSetActive((needActiveIndex - 1 + needOptions.length) % needOptions.length);
      } else if (key === 'Home') {
        e.preventDefault();
        needSetActive(0);
      } else if (key === 'End') {
        e.preventDefault();
        needSetActive(needOptions.length - 1);
      } else if (key === 'Enter' || key === ' ') {
        e.preventDefault();
        needSelectOption(needActiveIndex);
      } else if (key === 'Escape') {
        e.preventDefault();
        needCloseMenu(true);
      } else if (key === 'Tab') {
        needCloseMenu(false);
      } else if (key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
        var ch = key.toLowerCase();
        for (var i = 0; i < needOptions.length; i++) {
          var label = needOptions[i].textContent.trim().toLowerCase();
          if (label.charAt(0) === ch) {
            e.preventDefault();
            needSetActive(i);
            break;
          }
        }
      }
    });

    document.addEventListener('click', function (e) {
      if (needOpen && !needButton.contains(e.target) && !needListbox.contains(e.target)) {
        needCloseMenu(false);
      }
    });

    needRender();
  }

  /* ---------- Contact form ---------- */
  var form = document.getElementById('consultancy-form');
  if (!form) return;

  var nameInput = document.getElementById('cf-name');
  var emailInput = document.getElementById('cf-email');
  var messageInput = document.getElementById('cf-message');
  var fileInput = document.getElementById('cf-files');
  var dropzone = document.getElementById('cf-dropzone');
  var fileList = document.getElementById('cf-file-list');
  var filesError = document.getElementById('cf-files-error');

  var selectedFiles = [];

  function setError(input, errorEl, message) {
    if (input) {
      input.setAttribute('aria-invalid', 'true');
    }
    if (errorEl) {
      errorEl.textContent = message;
      errorEl.hidden = false;
    }
  }

  function clearError(input, errorEl) {
    if (input) {
      input.removeAttribute('aria-invalid');
    }
    if (errorEl) {
      errorEl.textContent = '';
      errorEl.hidden = true;
    }
  }

  function extensionOf(file) {
    var name = file.name || '';
    var i = name.lastIndexOf('.');
    return i >= 0 ? name.slice(i + 1).toLowerCase() : '';
  }

  function formatSize(bytes) {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  }

  function totalSize(files) {
    return files.reduce(function (sum, f) { return sum + f.size; }, 0);
  }

  function syncInputFiles() {
    try {
      var dt = new DataTransfer();
      selectedFiles.forEach(function (f) { dt.items.add(f); });
      fileInput.files = dt.files;
    } catch (err) {
      /* DataTransfer unsupported — the in-memory list remains the source of truth */
    }
  }

  function renderFileList() {
    if (!fileList) return;
    fileList.innerHTML = '';
    fileList.hidden = selectedFiles.length === 0;

    selectedFiles.forEach(function (file, index) {
      var li = document.createElement('li');
      li.className = 'file-item';

      var nameWrap = document.createElement('span');
      nameWrap.className = 'file-item-name';
      nameWrap.textContent = file.name;

      var size = document.createElement('span');
      size.className = 'file-item-size';
      size.textContent = formatSize(file.size);

      var remove = document.createElement('button');
      remove.className = 'file-remove';
      remove.type = 'button';
      remove.setAttribute('aria-label', 'Remove ' + file.name);
      remove.textContent = '\u00D7';
      remove.addEventListener('click', function () {
        selectedFiles.splice(index, 1);
        syncInputFiles();
        renderFileList();
        clearError(null, filesError);
      });

      nameWrap.appendChild(size);
      li.appendChild(nameWrap);
      li.appendChild(remove);
      fileList.appendChild(li);
    });
  }

  function addFiles(incoming) {
    var files = Array.prototype.slice.call(incoming || []);
    if (!files.length) return;

    var errors = [];
    var accepted = [];

    files.forEach(function (file) {
      if (ALLOWED_EXTENSIONS.indexOf(extensionOf(file)) === -1) {
        errors.push(file.name + ' is not a supported file type.');
        return;
      }
      accepted.push(file);
    });

    if (selectedFiles.length + accepted.length > MAX_FILES) {
      errors.push('You can attach a maximum of ' + MAX_FILES + ' files.');
      accepted = accepted.slice(0, Math.max(0, MAX_FILES - selectedFiles.length));
    }

    var currentSize = totalSize(selectedFiles);
    var newSize = totalSize(accepted);

    if (currentSize + newSize > MAX_TOTAL_SIZE) {
      errors.push('Total attachment size exceeds 20MB.');
    } else {
      selectedFiles = selectedFiles.concat(accepted);
      syncInputFiles();
    }

    renderFileList();

    if (errors.length) {
      setError(null, filesError, errors.join(' '));
    } else {
      clearError(null, filesError);
    }
  }

  if (fileInput) {
    fileInput.addEventListener('change', function () {
      addFiles(Array.prototype.slice.call(fileInput.files));
      fileInput.value = '';
    });
  }

  if (dropzone) {
    ['dragenter', 'dragover'].forEach(function (type) {
      dropzone.addEventListener(type, function (e) {
        e.preventDefault();
        dropzone.classList.add('is-dragover');
      });
    });
    ['dragleave', 'drop'].forEach(function (type) {
      dropzone.addEventListener(type, function (e) {
        e.preventDefault();
        dropzone.classList.remove('is-dragover');
      });
    });
    dropzone.addEventListener('drop', function (e) {
      if (e.dataTransfer && e.dataTransfer.files) {
        addFiles(Array.prototype.slice.call(e.dataTransfer.files));
      }
    });
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var valid = true;

    if (nameInput && !nameInput.value.trim()) {
      setError(nameInput, document.getElementById('cf-name-error'), 'Please enter your full name.');
      valid = false;
    } else {
      clearError(nameInput, document.getElementById('cf-name-error'));
    }

    if (emailInput && !EMAIL_PATTERN.test(emailInput.value.trim())) {
      setError(emailInput, document.getElementById('cf-email-error'), 'Please enter a valid email address.');
      valid = false;
    } else {
      clearError(emailInput, document.getElementById('cf-email-error'));
    }

    if (messageInput && !messageInput.value.trim()) {
      setError(messageInput, document.getElementById('cf-message-error'), 'Please tell me a little about your enquiry.');
      valid = false;
    } else {
      clearError(messageInput, document.getElementById('cf-message-error'));
    }

    var fileErrors = [];
    if (selectedFiles.length > MAX_FILES) {
      fileErrors.push('You can attach a maximum of ' + MAX_FILES + ' files.');
    }
    if (totalSize(selectedFiles) > MAX_TOTAL_SIZE) {
      fileErrors.push('Total attachment size exceeds 20MB.');
    }
    selectedFiles.forEach(function (f) {
      if (ALLOWED_EXTENSIONS.indexOf(extensionOf(f)) === -1) {
        fileErrors.push(f.name + ' is not a supported file type.');
      }
    });

    if (fileErrors.length) {
      setError(null, filesError, fileErrors.join(' '));
      valid = false;
    }

    if (!valid) return;

    // Integration pending: connect this form to a submission endpoint before
    // enabling live enquiries. No request is sent until an endpoint is wired
    // up here (e.g. a fetch() to the approved delivery service). Uploaded
    // files must be validated, stored and access-restricted server-side.
  });
})();
