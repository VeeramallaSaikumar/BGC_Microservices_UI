import {test as baseTest} from "@playwright/test";
import AddEmployee from "../pages/Admin/AddEmployee";
import LoginPage from "../pages/Admin/loginPage";
import ClientList from "../pages/Admin/ClientList";
import CandidateList from "../pages/Admin/CandidateList";
import Profile from "../pages/Admin/Profile";

const mytest = baseTest.extend<{
    loginPage: LoginPage;
    addEmployee: AddEmployee;
    candidateList: CandidateList;
    clientList: ClientList;
    profile: Profile;
    
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
    } 
})
export default mytest;
export const expect = mytest.expect