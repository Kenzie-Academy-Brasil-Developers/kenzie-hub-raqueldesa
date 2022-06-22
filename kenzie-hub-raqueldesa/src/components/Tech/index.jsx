import api from "../../services/api";
import { SmallButton } from "../Button";
import { StyledTech } from "./style";

function Tech({ title, status, id, loadTechs, token }) {
  function removeTech(id) {
    api
      .delete(`/users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => loadTechs());
  }
  return (
    <StyledTech>
      <h3>{title}</h3>
      <div>
        <p>{status}</p>
        <SmallButton
          onClick={() => {
            removeTech(id);
          }}
          width="25px"
          height="25px"
          display="block"
        >
          X
        </SmallButton>
      </div>
    </StyledTech>
  );
}
export default Tech;
