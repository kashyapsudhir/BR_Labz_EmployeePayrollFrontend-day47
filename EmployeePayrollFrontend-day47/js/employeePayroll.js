/* UC9:- On Form Submit populate the Employee Payroll Data Object.
         - Write JavaScript function in a separate file.
         - Add additional fields to Employee Payroll as required.
         - Perform the validation on the setter method. */

         class EmployeePayroll {

            // getter and setter method
            get id() 
            { 
                return this._id; 
            }
            set id(id) 
            { 
                this._id = id; 
            }
        
            get name() { return this._name; }
            set name(name) { this._name = name; }
        
            get profilePic() { return this._profilePic; }
            set profilePic(profilePic) { this._profilePic = profilePic; }
        
            get gender() { return this._gender; }
            set gender(gender) { this._gender = gender; }
        
            get department() { return this._department; }
            set department(department) { this._department = department; }
        
            get salary() { return this._salary; }
            set salary(salary) { this._salary = salary; }
        
            get note() { return this._note; }
            set note(note) { this._note = note; }
        
            get startDate() { return this._startDate; }
            set startDate(startDate) { this._startDate = startDate; }
        
            // toString() method
            toString() {
                const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
                const empDate = this.startDate === undefined ? "undefined" : 
                                this.startDate.toLocaleDateString("en-US", options);
                return "id=" + this.id + "\nname=" + this.name + "\nprofilePic=" + this.profilePic + 
                        "\ngender=" + this.gender + "\ndepartment=" + this.department + "\nsalary=" + 
                        this.salary + "\nstartDate=" + empDate + "\nnote=" + this.note;
            }
        }