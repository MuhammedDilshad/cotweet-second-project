import { Modal, useMantineTheme } from "@mantine/core";

function ProfileModal({ modalOpened, setModalOpened }) {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size="45%"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <form action="" className="infoForm">
        <h3>Your info</h3>
        <div>
          <input
            type="text"
            className="infoInput"
            name="firstname"
            placeholder="FirstName"
          />
          <input
            type="text"
            className="infoInput"
            name="lastname"
            placeholder="LastName"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="User Name"
            className="infoInput"
            name="username"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Lives In"
            className="infoInput"
            name="livesin"
          />
          <input
            type="text"
            placeholder="Country"
            className="infoInput"
            name="country"
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            className="infoInput"
            name="email"
          />
        </div>
        <div>
          Profile Image
          <input type="file" className="infoInput" name="profileimage" />
          Cover Image
          <input type="file" className="infoInput" name="coverimage" />
        </div>
        <button className="button infoButton">Update</button>
      </form>
    </Modal>
  );
}

export default ProfileModal;
