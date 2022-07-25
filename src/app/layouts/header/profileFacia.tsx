import Avatar from "@mui/material/Avatar";

export function ProfileFacia() {
  return (
    <div className="profileFacia">
      {/* <Avatar alt="User's avatar" src="/static/images/avatar/1.jpg" sx={{ width: 24, height: 24 }} /> */}
      <Avatar sx={{ width: 40, height: 40 }}>U</Avatar>
      <div className="profileFacia__greeting">
        <span style={{ fontSize: "0.9rem" }}>Добро пожаловать!</span>
        <span>Username here</span>
      </div>
    </div>
  );
}
