const friendRsvps = (friends, rsvps) => friends.map((friend) => {
  const f = friend;
  const rsvp = rsvps.find(r => r.friendId === friend.id);
  if (rsvp) {
    f.rsvpId = rsvp.id;
    f.status = rsvp.statusId;
  }
  return f;
});

export default { friendRsvps };
