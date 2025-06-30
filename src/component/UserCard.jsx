const UserCard = ({ user }) => {
  const { photoUrl, firstName, lastName, about } = user;

  return (
    <div className="card bg-base-300 w-96 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={photoUrl} alt="Profile" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        <p>{about}</p>
        <div className="card-actions">
          <button className="btn btn-neutral">Ignore</button>
          <button className="btn btn-primary">Send Request</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
