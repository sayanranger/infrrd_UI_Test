import { EmployeeModel } from './employee-model'

export class EmployeesData {
    public employeeList: EmployeeModel[] = [
        {
            image: '../assets/Roman.PNG',
            name: 'Roman Perez',
            designation: 'UI Developer',
            department: 'Front End Development',
            role: 'Full-Time',
            rating: 4,
            experience: 2,
            dateOfJoining: 2017,
            team: 'OCBC Bangalore',
            reportingManager: 'Harman Pizchek',
            phoneNumber: 2022081234,
            email: 'roman.perez@infrrd.com'
        },
        {
            image: '../assets/Natasha.PNG',
            name: 'Natasha Romanoc',
            designation: 'Team Lead',
            department: 'Backend Development',
            role: 'Full-Time',
            rating: 5,
            experience: 5,
            dateOfJoining: 2019,
            team: 'OCBC Singapore',
            reportingManager: 'Harman Pizchek',
            phoneNumber: 2022081123,
            email: 'natasha.romanov@infrrd.com'
        },
        {
            image: '../assets/Issac.PNG',
            name: 'Issac Jester',
            designation: 'UI Developer',
            department: 'Front End Development',
            role: 'Full-Time',
            rating: 4,
            experience: 1,
            dateOfJoining: 2020,
            team: 'OCBC Singapore',
            reportingManager: 'Mahendra Verma',
            phoneNumber: 2029013124,
            email: 'issac.jester@infrrd.com'
        },
        {
            image: '../assets/Naren.PNG',
            name: 'Naren Shah',
            designation: 'JAVA Developer',
            department: 'Backend Development',
            role: 'Full-Time',
            rating: 5,
            experience: 6,
            dateOfJoining: 2016,
            team: 'OCBC Bangalore',
            reportingManager: 'Mahendra Verma',
            phoneNumber: 7290123000,
            email: 'naren.shah@infrrd.com'
        },
        {
            image: '../assets/Meetali.PNG',
            name: 'Meetali Johar',
            designation: 'QA Analyst',
            department: 'QA',
            role: 'Full-Time',
            rating: 3,
            experience: 3,
            dateOfJoining: 2018,
            team: 'OCBC Bangalore',
            reportingManager: 'Mahendra Verma',
            phoneNumber: 8081230000,
            email: 'meetali.johar@infrrd.com'
        },
        {
            image: '../assets/Anand.PNG',
            name: 'Anand Baveja',
            designation: 'DevOps Developer',
            role: 'Full-Time',
            department: 'DevOps',
            rating: 4,
            experience: 4,
            dateOfJoining: 2016,
            team: 'OCBC Bangalore',
            reportingManager: 'Mahendra Verma',
            phoneNumber: 9099991234,
            email: 'anand.baveja@infrrd.com'
        },
        {
            image: '../assets/Jacline.PNG',
            name: 'Jacline Fernandez',
            designation: 'Team Lead',
            department: 'Front End Development',
            role: 'Full-Time',
            rating: 5,
            experience: 6,
            dateOfJoining: 2015,
            team: 'OCBC Singapore',
            reportingManager: 'Harman Pizchek',
            phoneNumber: 2022089808,
            email: 'jacline.fernandez@infrrd.com'
        },
        {
            image: '../assets/Rohan.PNG',
            name: 'Rohan Verma',
            designation: 'UI Developer',
            department: 'Front End Development',
            role: 'Full-Time',
            rating: 5,
            experience: 3,
            dateOfJoining: 2017,
            team: 'OCBC Bangalore',
            reportingManager: 'Mahendra Verma',
            phoneNumber: 87091232209,
            email: 'rohan.verma@infrrd.com'
        }
    ];
    public department: String[] = [
        'Front End Development',
        'QA',
        'Backend Development',
        'DevOps'
    ];
    public role: String[] = [
        'Part-Time',
        'Full-Time'
    ];
    public position: String[] = [
        'UI Developer',
        'Team Lead',
        'QA Analyst',
        'JAVA Developer',
        'DevOps Developer'
    ];
    public experience: Number[] = [
        1, 2, 3, 4, 5, 6, 7
    ];
    public yearOfJoining: Number[] = [
        2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021
    ];
    public location: String[] = [
        'Bangalore',
        'Singapore'
    ];
    public team: String[] = [
        'OCBC Bangalore',
        'OCBC Singapore'
    ]
}
