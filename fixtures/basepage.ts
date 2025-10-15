import {test as baseTest} from "@playwright/test";
import AddEmployee from "../pages/Admin/AddEmployee";
import LoginPage from "../pages/Admin/loginPage";
import ClientList from "../pages/Admin/ClientList";
import CandidateList from "../pages/Admin/CandidateList";
import Profile from "../pages/Admin/Profile";
import ActiveEmployee from "../pages/Admin/ActiveEmployee";
import ClientProfile from "../pages/Client/ClientProfile";
import AddCandidate from "../pages/Client/AddCandidate";
import PendingSubmission from "../pages/Client/PendingSubmission";
import PendingCaseSubmission from "../pages/Client/PendingCaseSubmission";
import AssignedCandidates from "../pages/Employee/AssignedCandidates";
import PersonalCheck from "../pages/Employee/PersonalCheck";
import AddressCheck from "../pages/Employee/AddressCheck"
import EducationCheck from "../pages/Employee/EducationCheck";

const mytest = baseTest.extend<{
    loginPage: LoginPage;
    addEmployee: AddEmployee;
    candidateList: CandidateList;
    clientList: ClientList;
    profile: Profile;
    activeEmployee: ActiveEmployee;
    clientProfile:ClientProfile;
    addCandidate:AddCandidate
    pendingSubmission:PendingSubmission
    pendingCaseSubmission:PendingCaseSubmission
    assignedCandidates:AssignedCandidates
    personalCheck:PersonalCheck
    addressCheck:AddressCheck
    educationCheck:EducationCheck
    
}>({
    loginPage: async ({page}, use) => {
      await use (new LoginPage(page));
  },  
  addEmployee: async ({page}, use) => {
      await use (new AddEmployee(page));
  },  
  candidateList: async ({ page}, use) => {
      await use (new CandidateList(page));
  },  
  clientList: async ({ page}, use) => {
      await use (new ClientList(page));
  },
  profile: async ({ page}, use) => {
     await use (new Profile(page));
  }, 
  activeEmployee: async ({ page}, use) => {
        await use (new ActiveEmployee(page));
  },
  clientProfile: async ({page},use)=>{
    await use (new ClientProfile(page));
  },
  addCandidate: async ({page},use)=>{
    await use(new AddCandidate(page));
  },    
  pendingSubmission:async ({page},use)=>{
    await use(new PendingSubmission(page));
  },
  pendingCaseSubmission:async({page},use)=>{
    await use(new PendingCaseSubmission(page))
  },
  assignedCandidates:async({page},use)=>{
    await use(new AssignedCandidates(page))
  },
  personalCheck:async({page},use)=>{
    await use(new PersonalCheck(page))
  },
  addressCheck:async({page},use)=>{
    await use(new AddressCheck(page))
  },
  educationCheck:async({page},use)=>{
    await use(new EducationCheck(page))
  }
})
export default mytest;
export const expect = mytest.expect