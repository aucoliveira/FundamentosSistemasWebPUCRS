document.addEventListener('DOMContentLoaded', function() {
    // Client Registration Form Submission (example)
    const clientRegistrationForm = document.getElementById('clientRegistrationForm');
    if (clientRegistrationForm) {
        clientRegistrationForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission
            alert('Formulário de Cadastro enviado! (Dados não serão armazenados neste exemplo)');
            // In a real application, you would send this data to a server
            clientRegistrationForm.reset(); // Clear the form
        });
    }

    // Service Scheduling Form Submission (example)
    const schedulingForm = document.getElementById('schedulingForm');
    if (schedulingForm) {
        schedulingForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission
            const serviceType = document.getElementById('tipoServico').value;
            const appointmentDate = document.getElementById('dataAgendamento').value;
            const appointmentTime = document.getElementById('horaAgendamento').value;

            if (serviceType && appointmentDate && appointmentTime) {
                alert(`Agendamento confirmado para ${serviceType} em ${appointmentDate} às ${appointmentTime}!`);
                // In a real application, you would send this data to a server
                schedulingForm.reset(); // Clear the form
            } else {
                alert('Por favor, preencha todos os campos obrigatórios para o agendamento.');
            }
        });
    }

    // Temporal function: Display current time (optional, as carousel also adds dynamism)
    function displayCurrentTime() {
        const now = new Date();
        const timeString = now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
        let timeDisplay = document.getElementById('currentTimeDisplay');
        if (!timeDisplay) {
            // If the element doesn't exist, create it in the header or footer
            timeDisplay = document.createElement('p');
            timeDisplay.id = 'currentTimeDisplay';
            timeDisplay.classList.add('text-center', 'text-white', 'mt-2', 'mb-0');
            document.querySelector('header').appendChild(timeDisplay); // Appending to header as an example
        }
        timeDisplay.textContent = `Hora atual: ${timeString}`;
    }

    // Update time every minute
    // setInterval(displayCurrentTime, 60000);
    // displayCurrentTime(); // Initial display
});