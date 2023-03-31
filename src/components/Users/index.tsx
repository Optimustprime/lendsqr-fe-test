import { useContext, useEffect, useState } from "react";
import { IUser, UserContext, UserContextType } from "../../globalState";
import Cards from "./Cards";
import Pagination from "./Pagination";
import "./Users.scss";
import UsersTable from "./UsersTable";

const Users = () => {
  const { loading, users, usersOverview } = useContext(
    UserContext
  ) as UserContextType;
  const [filterUsers, setfilterUsers] = useState<IUser[]>(users);

  useEffect(() => {
    setfilterUsers(users);
  }, [users]);

  const [postPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastPage = currentPage * postPerPage;
  const indexOfFirstPage = indexOfLastPage - postPerPage;
  const currentTemplate = filterUsers?.slice(indexOfFirstPage, indexOfLastPage);
  const numberOfPages = Math.ceil(filterUsers?.length / postPerPage);

  const previous = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else {
      alert("last page");
    }
  };
  const next = () => {
    if (currentPage < numberOfPages) {
      setCurrentPage(currentPage + 1);
    } else {
      alert("last page");
    }
  };

  const filterSearch = (val: any) => {
    console.log(val, "val");
    const filtered: any[] = [];
    users.forEach((user) => {
      const formated = new Date(user.createdAt).toISOString().split("T")[0];
      // console.log(
      //   user.phoneNumber,
      //   val.phone,
      //   user.phoneNumber.includes(val.phone)
      // );
      console.log(
        user.orgName.toLowerCase().includes(val.org.toLowerCase()),
        "orggg"
      );
      if (
        user.status.toLowerCase().includes(val.status.toLowerCase()) &&
        user.orgName.toLowerCase().includes(val.org.toLowerCase()) &&
        user.userName.toLowerCase().includes(val?.username.toLowerCase()) &&
        user.email.toLowerCase().includes(val.email.toLowerCase()) &&
        formated === val.date
        // user.phoneNumber.includes(val.phone)
      ) {
        filtered.push(user);
      }
    });
    console.log(filtered, "filtered");
    setfilterUsers(() => filtered);
  };

  const handleFilter = (val: any) => {
    filterSearch(val);
  };

  const handleReset = () => {
    setfilterUsers(users);
  };
  return (
    <div className="users">
      <h3>Users</h3>
      <Cards usersOverview={usersOverview} loading={loading} />
      <UsersTable
        filterUsers={currentTemplate}
        loading={loading}
        users={users}
        handleReset={handleReset}
        handleFilter={(val) => handleFilter(val)}
      />
      <Pagination
        currentPage={currentPage}
        numberOfPages={numberOfPages}
        next={next}
        previous={previous}
        setPage={(val) => setCurrentPage(val)}
      />
    </div>
  );
};

export default Users;
