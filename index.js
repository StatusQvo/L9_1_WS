const peopleWaiting = [
    "Кристина",
    "Олег",
    "Кирилл",
    "Мария",
    "Светлана",
    "Артем",
    "Глеб"
];

const peopleLeftWithPackage = peopleWaiting.slice(0,3)
const peopleLeftWithoutPackage = peopleWaiting.slice(3)

const giveParcel = () => {
    const clientName = peopleWaiting.shift();
    alert(
        `${clientName} получил(а) посылку. В очереди осталось ${peopleWaiting.length} человек.`
    );
};

const leaveQueueWithoutParcel = () => {
    const clientName = peopleWaiting.pop();
    alert(`${clientName} не получил(а) посылку и ушел(ла) из очереди`);
};


peopleLeftWithPackage.forEach(()=>{
    giveParcel();
})

peopleLeftWithoutPackage.forEach(()=>{
    leaveQueueWithoutParcel();
})

