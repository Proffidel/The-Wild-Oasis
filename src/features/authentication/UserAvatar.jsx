import styled from "styled-components";
import { useUser } from "./useUser";

function UserAvatar() {
  const { user } = useUser();
  const { fullName, avatar } = user.user_metadata;

  return (
    <StyledUserAvatar>
      <Avatar src={avatar || "default-user.jpg"} alt={`Avatar ${fullName}`} />
      <span>{fullName}</span>
    </StyledUserAvatar>
  );
}

export default UserAvatar;

const StyledUserAvatar = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  font-weight: 500;
  font-size: 1.4rem;
  color: var(--color-grey-600);
`;

const Avatar = styled.img`
  display: block;
  width: 4rem;
  width: 3.6rem;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  outline: 2px solid var(--color-grey-100);
`;

// tooltip {
//   position: relative; /* Required for the tooltip to be positioned relative to the button */
// }

// .tooltip::after {
//   content: "This is a tooltip text"; /* The text to show in the tooltip */
//   display: none; /* Hide the tooltip by default */
//   position: absolute; /* Position the tooltip relative to the button */
//   bottom: 100%; /* Position the tooltip above the button */
//   left: 50%; /* Center the tooltip horizontally */
//   transform: translateX(-50%); /* Center the tooltip horizontally */
//   background-color: #000; /* Tooltip background color */
//   color: #fff; /* Tooltip text color */
//   padding: 5px; /* Add some padding to the tooltip */
//   border-radius: 5px; /* Add rounded corners to the tooltip */
//   white-space: nowrap; /* Prevent line breaks in tooltip text */
// }

// .tooltip:hover::after {
//   display: block; /* Show the tooltip when hovering over the button */
// }
