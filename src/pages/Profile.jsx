export default function Profile() {
  return (
    <div className="profile">
      <h3 className="profile-title">Account Settings</h3>

      <div className="profile-card">
        <img
          src="https://i.pravatar.cc/100"
          alt="profile"
          className="avatar"
        />

        <div className="profile-info">
          <p className="name">Marry Doe</p>
          <p className="email">Marry@Gmail.Com</p>
        </div>
      </div>

      <p className="profile-desc">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
        Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </p>
    </div>
  );
}
