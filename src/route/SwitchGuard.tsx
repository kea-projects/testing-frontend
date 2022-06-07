import { Route, Routes as Switch } from "react-router-dom";
import { UserType } from "../layout/navigation-bar/authorized-navigation-bar/AuthorizedNavigationBar";
import { StudentHomepage } from "../layout/student-homepage/StudentHomepage";
import { TeacherSubjectManagement } from "../layout/teacher-subject-management/TeacherSubjectManagement";
import { LoginPage } from "../layout/login-page/LoginPage";
import { NotFoundPage } from "../layout/not-found-page/NotFoundPage";
import { LoginSuccess } from "../layout/login-page/login-success/LoginSuccess";
import { AttendancePage } from "../layout/attendance-page/AttendancePage";
import { useContext, useEffect } from "react";
import { UserContext } from "../provider/UserProvider";

function UnknownUser() {
  const { setUserDetail } = useContext(UserContext);
  useEffect(() => {
    setUserDetail({ role: UserType.GUEST });
  }, [setUserDetail]);
  return null;
}

export function SwitchGuard() {
  const { userDetail } = useContext(UserContext);
  switch (userDetail.role) {
    case UserType.GUEST:
      return (
        <Switch>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login/success" element={<LoginSuccess />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Switch>
      );
    case UserType.STUDENT:
      return (
        <Switch>
          <Route path="/" element={<StudentHomepage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Switch>
      );
    case UserType.TEACHER:
      return (
        <Switch>
          <Route path="/" element={<TeacherSubjectManagement />} />
          <Route element={<AttendancePage />} path="/attendance-code" />
          <Route path="/*" element={<NotFoundPage />} />
        </Switch>
      );
    default:
      return <UnknownUser />;
  }
}
