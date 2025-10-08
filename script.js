// Lista de códigos válidos (en producción, esto vendría de una API/base de datos)
const validCodes = ['JDC-290925', 'ABC-123456', 'XYZ-789012'];

function validateCode() {
    const input = document.getElementById('codeInput');
    const result = document.getElementById('result');
    const code = input.value.trim().toUpperCase();

    if (!code) {
        showResult(false, 'Por favor ingrese un código de validación');
        return;
    }

    const isValid = validCodes.includes(code);

    if (isValid) {
        showResult(true, `El documento con código <strong>${code}</strong> es auténtico y ha sido emitido oficialmente por ProgreSER S.A.`);
    } else {
        showResult(false, `El código <strong>${code}</strong> no se encuentra en nuestros registros. Verifique el código o contacte a servicio al cliente.`);
    }
}

function showResult(success, message) {
    const result = document.getElementById('result');
    
    if (success) {
        result.className = 'result-card result-success';
        result.innerHTML = `<span class="result-icon">✓</span> ${message}`;
    } else {
        result.className = 'result-card result-error';
        result.innerHTML = `<span class="result-icon">✗</span> ${message}`;
    }
    
    result.style.display = 'block';
}

// Permitir validar con Enter
document.getElementById('codeInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        validateCode();
    }
});