import * as usersService from "../../utilities/users-service";

export default function OrderHistoryPage() {
  const handleCheckToken = async () => {
    const expDate = await usersService.checkToken();
    console.log(expDate);
  };
  return (
    <>
      <h1>OrderHistoryPage</h1>
      <button onClick={handleCheckToken}>Check when my login expires</button>
    </>
  );
}
