export default class ENV{
    public static BASE_URL= process.env.BASE_URL
    public static ADMIN_EMAIL = process.env.ADMIN_EMAIL??"vijay.k@clientservertech.com"
    public static ADMIN_PWD = process.env.ADMIN_PWD??"1234qwer"
    public static EMPLOYEE_EMAIL = process.env.EMPLOYEE_EMAIL??"Vikas.k@clientservertech.com"
    public static EMPLOYEE_PWD = process.env.EMPLOYEE_PWD??"1234qwer"
    public static CLIENT_EMAIL = process.env.CLIENT_EMAIL??"deepthi.k@clientservertech.com"
    public static CLIENT_PWD = process.env.CLIENT_PWD??"1234qwer"
    public static CANDIDATE_EMAIL = process.env.CANDIDATE_EMAIL
    public static CANDIDATE_PWD = process.env.CANDIDATE_PWD
}