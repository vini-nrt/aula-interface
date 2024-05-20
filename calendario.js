// script.js
document.addEventListener('DOMContentLoaded', () => {
    const calendar = document.getElementById('calendar');
    const monthYear = document.getElementById('month-year');
    const daysContainer = document.getElementById('days');
    const prevMonthButton = document.getElementById('prev-month');
    const nextMonthButton = document.getElementById('next-month');

    const scheduleSection = document.getElementById('schedule-section');

    let currentDate = new Date();

    function renderCalendar(date) {
        const year = date.getFullYear();
        const month = date.getMonth();

        monthYear.textContent = `${date.toLocaleDateString('pt-BR', { month: 'long' })} ${year}`;
        daysContainer.innerHTML = '';

        const firstDay = new Date(year, month, 1).getDay();
        const lastDay = new Date(year, month + 1, 0).getDate();

        for (let i = 0; i < firstDay; i++) {
            const emptyCell = document.createElement('div');
            daysContainer.appendChild(emptyCell);
        }

        for (let i = 1; i <= lastDay; i++) {
            const dayCell = document.createElement('div');
            dayCell.textContent = i;

            if (i === date.getDate() && month === new Date().getMonth() && year === new Date().getFullYear()) {
                dayCell.classList.add('today');
            }

            dayCell.addEventListener('click', () => {
                openScheduleSection(i, month, year);
            });

            daysContainer.appendChild(dayCell);
        }
    }

    function openScheduleSection(day, month, year) {
        const dateInput = document.getElementById('date');
        dateInput.value = `${day}/${month + 1}/${year}`;
        scheduleSection.style.display = 'block';
    }

    prevMonthButton.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar(currentDate);
    });

    nextMonthButton.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar(currentDate);
    });

    const scheduleForm = document.getElementById('schedule-form');
    scheduleForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Aula salva com sucesso!');
        scheduleSection.style.display = 'none';
    });

    const cancelButton = document.getElementById('cancel');
    cancelButton.addEventListener('click', () => {
        scheduleSection.style.display = 'none';
    });

    renderCalendar(currentDate);
});
