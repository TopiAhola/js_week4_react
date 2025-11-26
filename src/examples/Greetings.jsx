const Greeting = (props)=>{

    console.log(props);
    const { name, age, isTeacher } = props;
    const teacherFunc = (isTeacher) =>{ if(isTeacher){return 'you are teacher';} else {return 'you are not a teacher';} }
    let teacherString = teacherFunc(isTeacher);

    //funktiokutsu nimellä toimii mutta nuolifunktio ei...
    return (
        <div>
            Greetings {name}, {age}.
            {teacherFunc(isTeacher)}
            {isTeacher ? 'you are teacher' : 'you are not a teacher'}

        </div>);
}

export default Greeting;
