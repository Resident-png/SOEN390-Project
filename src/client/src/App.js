import Navbar from "./components/Navbar";
import SignIn from "./components/SignIn";
import LoginFooter from "./components/LoginFooter";
import SignupFooter from "./components/SignupFooter";
import JobPosting from "./components/JobPosting";
import ViewJobsApplied from "./components/ViewJobsApplied";
import ReceivedApplications from "./components/receivedApplicationsForRecruiters";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignUp from "./components/SignUp";
import UserProfile from "./components/UserProfile";
import JobApplication from "./components/JobApplication";
import JobListing from "./components/JobListing";
import SearchUser from "./components/SearchUser";
import PublicUserProfile from "./components/PublicUserProfile";
import Chat from "./components/Chat";

import WaitingConnections from "./components/waitingConnections";
import EditJobPosting from "./components/EditJobPosting";

import EditUserProfile from "./components/EditUserProfile";
import UserTimeline from "./components/UserTimeline";
import UserSession from "./UserSession";
import DMReport from "./components/DMReport";

import io from "socket.io-client";
import JobList from "./components/JobList";
import ManageAccounts from "./components/ManageAccounts";
import AdminEditAccount from "./components/AdminEditAccount";

function App() {
  //const socket = io.connect("http://localhost:9000");

  return (
    <UserSession>
      {/* Link to pages using React Router DOM */}
      <BrowserRouter>
        <Routes>
          <Route
            path="/signup"
            element={
              <>
                <Navbar /> <SignUp /> <SignupFooter />
              </>
            }
          ></Route>
          <Route
            path="/signin"
            element={
              <>
                <Navbar /> <SignIn /> <LoginFooter />
              </>
            }
          ></Route>
          <Route
            path="/jobPosting"
            element={
              <>
                <Navbar /> <JobPosting /> <LoginFooter />
              </>
            }
          ></Route>
          <Route
            path="/UserProfile"
            element={
              <>
                <Navbar /> <UserProfile />
              </>
            }
          ></Route>
          <Route
            path="/JobList"
            element={
              <>
                <Navbar /> <JobList /> <LoginFooter />
              </>
            }
          ></Route>
          <Route
            path="/users/search"
            element={
              <>
                <Navbar /> <SearchUser /> <LoginFooter />
              </>
            }
          ></Route>
          <Route
            path="/users/search/:id"
            element={
              <>
                <Navbar /> <PublicUserProfile />
              </>
            }
          ></Route>
          <Route
            path="/waitingConnections"
            element={
              <>
                <Navbar /> <WaitingConnections /> <LoginFooter />
              </>
            }
          ></Route>

          <Route
            path="/editUserProfile"
            element={
              <>
                <Navbar /> <EditUserProfile /> <LoginFooter />
              </>
            }
          ></Route>
          <Route
            path="/jobs"
            element={
              <>
                <Navbar /> <JobListing /> <LoginFooter />
              </>
            }
          ></Route>
          <Route
            path="/jobs/:id"
            element={
              <>
                <Navbar /> <JobApplication /> <LoginFooter />
              </>
            }
          ></Route>
          <Route
            path="/jobs/edit/:id"
            element={
              <>
                <Navbar /> <EditJobPosting /> <SignupFooter />
              </>
            }
          ></Route>
          <Route
            path="/chat"
            element={
              <>
                <Navbar /> <Chat /> <SignupFooter />
              </>
            }
          ></Route>
          <Route
            path="/userTimeline"
            element={
              <>
                <Navbar /> <UserTimeline /> <SignupFooter />
              </>
            }
          ></Route>
          <Route
            path="/jobsApplied"
            element={
              <>
                <Navbar /> <ViewJobsApplied /> <SignupFooter />
              </>
            }
          ></Route>
          <Route
            path="/dmReports"
            element={
              <>
                <Navbar /> <DMReport /> <SignupFooter />
              </>
            }
          ></Route>
          <Route
            path="/receivedApplications"
            element={
              <>
                <Navbar /> <ReceivedApplications /> <SignupFooter />
              </>
            }
          ></Route>
          <Route
            path="/manageAccounts"
            element={
              <>
                <Navbar /> <ManageAccounts /> <SignupFooter />
              </>
            }
          ></Route>
          <Route
            path="/manageAccounts/:id"
            element={
              <>
                <Navbar /> <AdminEditAccount /> <SignupFooter />
              </>
            }
          ></Route>
          <Route
            path="/"
            element={
              <>
                <Navigate to="/signin"></Navigate>
              </>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </UserSession>
  );
}

export default App;
