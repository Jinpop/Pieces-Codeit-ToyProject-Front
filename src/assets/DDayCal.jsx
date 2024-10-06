const DDayCal = (createdAt) => {
    const todayDate = new Date();
    const momentDate = new Date(createdAt.substring(0, 10));

    return Math.floor((todayDate - momentDate) / (1000 * 60 * 60 * 24))
}

export default DDayCal;