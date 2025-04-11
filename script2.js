// РАСКОМЕНТИТЬ HTML
const company = {
    name: "Компания",
    employees: [],
    positions: ["Директор", "Сотрудник", "Начальник отдела"],
    directorIndex: -1,

    addEmployee: function(fullName, gender, age, positionIndex, salary) {
        if (positionIndex <= this.positions.length - 1 && positionIndex >= 0) {
            const newEmployee = {
                fullName,
                gender,
                age,
                position: this.positions[positionIndex],
                salary
            };

            this.employees.push(newEmployee);

            if (positionIndex == 0) {
                this.directorIndex = this.employees.length - 1;
            }
        } else {
            console.warn('Попытка добавить сотрудника с несуществующей должностью');
        }
    },

    deleteEmployee: function(index) {
        if (index <= this.employees.length - 1 && index >= 0) {
            if (index == this.directorIndex) {
                this.directorIndex = -1;
            }
            this.employees.splice(index, 1);
        } else {
            console.warn('Сотрудника с таким id нет');
        }
    },

    updateEmployee: function(index) {
        if (index <= this.employees.length - 1 && index >= 0) {
            let fullName = prompt('Введите имя', this.employees[index].fullName);
            let gender = prompt('Введите пол', this.employees[index].gender);
            let age = prompt('Введите возраст', this.employees[index].age);
            let positionIndex = parseInt(prompt('Введите индекс должности', this.positions.indexOf(this.employees[index].position)));
            let salary = prompt('Введите зарплату', this.employees[index].salary);

            if (positionIndex <= this.positions.length - 1 && positionIndex >= 0) {
                this.employees[index] = {
                    fullName,
                    gender,
                    age,
                    position: this.positions[positionIndex],
                    salary
                };

                if (positionIndex == 0) {
                    this.directorIndex = index;
                } else if (index == this.directorIndex) {
                    this.directorIndex = -1;
                }
            } else {
                console.warn('Попытка изменить сотрудника на несуществующую должность');
            }
        } else {
            console.warn('Сотрудника с таким id нет');
        }
    },

    getAllEmployee: function() {
        for(let i = 0; i < this.employees.length; i++) {
            const elem = this.employees[i];
            console.log(elem);
        }
    },

    getAllPosition: function() {
        for (let i = 0; i < this.positions.length; i++) {
            const elem = this.positions[i];
            console.log(elem);
        }
    },

    getDirectorName: function() {
        if (this.directorIndex != -1) {
            console.log(this.employees[this.directorIndex].fullName);
        } else {
            for (let i = 0; i < this.employees.length; i++) {
                if (this.employees[i].position == "Директор") {
                    this.directorIndex = i;
                    console.log(this.employees[i].fullName);
                    return;
                }
            }
            console.log("Директор не назначен");
        }
    }
};

company.addEmployee("Иванов Иван Иванович", "М", 45, 0, 150000);
company.addEmployee("Петрова Анна Сергеевна", "Ж", 32, 2, 90000);
company.addEmployee("Сидоров Алексей Петрович", "М", 28, 1, 60000);
company.addEmployee("Кузнецова Елена Владимировна", "Ж", 35, 1, 65000);
company.deleteEmployee(2);
company.updateEmployee(1);
company.getAllEmployee();
company.getAllPosition();
company.getDirectorName();