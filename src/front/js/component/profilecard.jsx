import React from "react";
import { Card, Image } from "react-bootstrap";

export const ProfileCard = ({ profileImg, name, bio }) => {
return (
<Card className="d-flex justify-content-center align-items-center">
<Image
src={profileImg}
className="rounded-circle"
style={{ width: "100px", height: "100px" }}
alt="Profile"
/>
<Card.Body>
<Card.Title>{name}</Card.Title>
<Card.Text>{bio}</Card.Text>
</Card.Body>
</Card>
);
};

