// === SISTEMA DE VALIDACIÓN DE FORMULARIO ===

// Objeto con las reglas de validación
const validationRules = {
    nombre: {
        required: true,
        minLength: 2,
        pattern: /^[a-zA-ZÀ-ÿ\s]{2,50}$/,
        errorMessages: {
            required: "El nombre es obligatorio",
            minLength: "El nombre debe tener al menos 2 caracteres",
            pattern: "El nombre solo puede contener letras y espacios"
        }
    },
    email: {
        required: true,
        pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        errorMessages: {
            required: "El correo electrónico es obligatorio",
            pattern: "Ingrese un correo electrónico válido"
        }
    },
    telefono: {
        required: true,
        pattern: /^[0-9]{10}$/,
        errorMessages: {
            required: "El teléfono es obligatorio",
            pattern: "El teléfono debe tener exactamente 10 dígitos"
        }
    },
    selectMotivo: {
        required: true,
        errorMessages: {
            required: "Debe seleccionar un motivo de consulta"
        }
    },
    mensaje: {
        required: true,
        minLength: 10,
        maxLength: 500,
        errorMessages: {
            required: "El mensaje es obligatorio",
            minLength: "El mensaje debe tener al menos 10 caracteres",
            maxLength: "El mensaje no puede exceder 500 caracteres"
        }
    },
    contacto: {
        required: true,
        errorMessages: {
            required: "Debe seleccionar una preferencia de contacto"
        }
    },
    terminos: {
        required: true,
        errorMessages: {
            required: "Debe aceptar los términos y condiciones"
        }
    }
};

// Función para mostrar error
function showError(fieldName, message) {
    const errorElement = document.getElementById(`error-${fieldName}`);
    const inputElement = document.getElementById(fieldName) || document.querySelector(`[name="${fieldName}"]`);

    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
        errorElement.style.color = '#dc3545';
        errorElement.style.fontSize = '0.875rem';
        errorElement.style.marginTop = '0.25rem';
    }

    if (inputElement) {
        inputElement.style.borderColor = '#dc3545';
        inputElement.classList.add('is-invalid');
    }
}

// Función para ocultar error
function hideError(fieldName) {
    const errorElement = document.getElementById(`error-${fieldName}`);
    const inputElement = document.getElementById(fieldName) || document.querySelector(`[name="${fieldName}"]`);

    if (errorElement) {
        errorElement.textContent = '';
        errorElement.style.display = 'none';
    }

    if (inputElement) {
        inputElement.style.borderColor = '#28a745';
        inputElement.classList.remove('is-invalid');
        inputElement.classList.add('is-valid');
    }
}

// Función para validar un campo individual
function validateField(fieldName, value) {
    const rules = validationRules[fieldName];
    if (!rules) return true;

    // Validar campo requerido
    if (rules.required && (!value || value.trim() === '')) {
        showError(fieldName, rules.errorMessages.required);
        return false;
    }

    // Si el campo está vacío y no es requerido, es válido
    if (!value || value.trim() === '') {
        hideError(fieldName);
        return true;
    }

    // Validar longitud mínima
    if (rules.minLength && value.length < rules.minLength) {
        showError(fieldName, rules.errorMessages.minLength);
        return false;
    }

    // Validar longitud máxima
    if (rules.maxLength && value.length > rules.maxLength) {
        showError(fieldName, rules.errorMessages.maxLength);
        return false;
    }

    // Validar patrón
    if (rules.pattern && !rules.pattern.test(value)) {
        showError(fieldName, rules.errorMessages.pattern);
        return false;
    }

    // Si llega aquí, la validación pasó
    hideError(fieldName);
    return true;
}

// Función para validar campos de radio
function validateRadioField(fieldName) {
    const radioButtons = document.querySelectorAll(`input[name="${fieldName}"]`);
    const isChecked = Array.from(radioButtons).some(radio => radio.checked);

    if (!isChecked) {
        showError(fieldName, validationRules[fieldName].errorMessages.required);
        return false;
    }

    hideError(fieldName);
    return true;
}

// Función para validar checkbox
function validateCheckboxField(fieldName) {
    const checkbox = document.querySelector(`input[name="${fieldName}"]`);

    if (!checkbox || !checkbox.checked) {
        showError(fieldName, validationRules[fieldName].errorMessages.required);
        return false;
    }

    hideError(fieldName);
    return true;
}

// Función para configurar validación en tiempo real (blur)
function setupFieldValidation() {
    // Validación para campos de texto
    const textFields = ['nombre', 'email', 'telefono'];
    textFields.forEach(fieldName => {
        const field = document.getElementById(fieldName);
        if (field) {
            field.addEventListener('blur', function() {
                validateField(fieldName, this.value);
            });

            // También validar mientras escribe (opcional)
            field.addEventListener('input', function() {
                // Solo ocultar error si estaba mostrando uno
                const errorElement = document.getElementById(`error-${fieldName}`);
                if (errorElement && errorElement.style.display !== 'none') {
                    validateField(fieldName, this.value);
                }
            });
        }
    });

    // Validación para select
    const selectField = document.getElementById('selectMotivo');
    if (selectField) {
        selectField.addEventListener('change', function() {
            validateField('selectMotivo', this.value);
        });
    }

    // Validación para radio buttons
    const radioButtons = document.querySelectorAll('input[name="contacto"]');
    radioButtons.forEach(radio => {
        radio.addEventListener('change', function() {
            validateRadioField('contacto');
        });
    });

    // Validación para checkbox
    const checkbox = document.querySelector('input[name="terminos"]');
    if (checkbox) {
        checkbox.addEventListener('change', function() {
            validateCheckboxField('terminos');
        });
    }
}

// Función para validar todo el formulario
function validateForm() {
    let isValid = true;

    // Validar campos de texto
    const textFields = ['nombre', 'email', 'telefono'];
    textFields.forEach(fieldName => {
        const field = document.getElementById(fieldName);
        const value = field ? field.value : '';
        if (!validateField(fieldName, value)) {
            isValid = false;
        }
    });

    // Validar select
    const selectField = document.getElementById('selectMotivo');
    const selectValue = selectField ? selectField.value : '';
    if (!validateField('selectMotivo', selectValue)) {
        isValid = false;
    }

    // Validar radio buttons
    if (!validateRadioField('contacto')) {
        isValid = false;
    }

    // Validar checkbox
    if (!validateCheckboxField('terminos')) {
        isValid = false;
    }

    return isValid;
}

// Función para mostrar mensaje de éxito
function showSuccessMessage() {
    alert("✅ Guardado con éxito");
}

// Función para configurar el botón de envío
function setupFormSubmission() {
    const submitButton = document.getElementById('btn-enviar');
    if (submitButton) {
        submitButton.addEventListener('click', function(e) {
            e.preventDefault(); // Prevenir envío por defecto

            console.log('Validando formulario...');

            if (validateForm()) {
                console.log('Formulario válido - procesando envío...');

                // Aquí puedes agregar la lógica para enviar el formulario
                // Por ejemplo, hacer una petición AJAX o enviar los datos a un servidor

                // Simular envío exitoso
                showSuccessMessage();

                // Opcional: limpiar el formulario después del envío exitoso
                // resetForm();

            } else {
                console.log('Formulario inválido - mostrando errores');

                // Hacer scroll al primer error
                const firstError = document.querySelector('[id^="error-"]:not([style*="display: none"])');
                if (firstError) {
                    firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }
        });
    }
}

// Función para limpiar el formulario (opcional)
function resetForm() {
    const fields = ['nombre', 'email', 'telefono', 'selectMotivo', 'mensaje'];
    fields.forEach(fieldName => {
        const field = document.getElementById(fieldName);
        if (field) {
            field.value = '';
            field.style.borderColor = '';
            field.classList.remove('is-valid', 'is-invalid');
        }
        hideError(fieldName);
    });

    // Limpiar radio buttons
    const radioButtons = document.querySelectorAll('input[name="contacto"]');
    radioButtons.forEach(radio => {
        radio.checked = false;
    });
    hideError('contacto');

    // Limpiar checkbox
    const checkbox = document.querySelector('input[name="terminos"]');
    if (checkbox) {
        checkbox.checked = false;
    }
    hideError('terminos');
}

// Función de inicialización
function initFormValidation() {
    console.log('Inicializando validación del formulario...');

    // Esperar a que todos los componentes estén cargados
    setTimeout(() => {
        setupFieldValidation();
        setupFormSubmission();
        console.log('Sistema de validación configurado exitosamente');
    }, 1000); // Ajusta este tiempo si es necesario
}

// Llamar a la inicialización cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFormValidation);
} else {
    initFormValidation();
}
