const genManager = function (Manager) {
    return `
    <div class="col-5 mt-5">
        <div class="card h-100">
            <div class="header">
                <h3>${Manager.name}</h3>
                <h4>Manager</h4><i class="icons">content_paste</i>
            </div>
            <div class="body">
                <p class="id">ID: ${Manager.id}</p>
                <p class="email">Email: <a href="mailto:${Manager.email}">${Manager.email}</a></p>
                <p class="office">Office Number: ${Manager.officeNumber}</p>
            </div>
        </div>
    </div>
    `;
}

const genIntern = function (Intern) {
    return `
    <div class="col-5 mt-5">
        <div class="card h-100">
            <div class="header">
                <h3>${Intern.name}</h3>
                <h4>Intern</h4><i class="icons">assignment_ind</i>
            </div>
            <div class="body">
                <p class="id">ID: ${Intern.id}</p>
                <p class="email">Email:<a href="mailto:${Intern.email}">${Intern.email}</a></p>
                <p class="school">School: ${Intern.school}</p>
            </div>
    </div>
</div>
    `
}

const genEngineer = function (Engineer) {
    return `
    <div class="col-5 mt-5">
        <div class="card h-100">
            <div class="header">
                <h3>${Engineer.name}</h3>
                <h4>Engineer</h4><i class="icons">laptop_mac</i>
            </div>
            <div class="body">
                <p class="id">ID: ${Engineer.id}</p>
                <p class="email">Email: <a href="mailto:${Engineer.email}">${Engineer.email}</a></p>
                <p class="github">Github: <a href="https://github.com/${Engineer.github}">${Engineer.github}</a></p>
            </div>
        </div>
    </div>
    `
};
module.exports = cardHtml; 