// const element = (
//     <div>
//         <h1>Hello, world!</h1>
//         <h2>现在是 {new Date().toLocaleTimeString()}.</h2>
//     </div>
// );
// function tick() {
//     ReactDOM.render(
//         element,
//         document.getElementById('example')
//     );
// }
function Clock(props) {
    var myStyle = {
        fontSize: 100,
        color: '#FF0000'
    };
    var arr = [
        <h1 style = {myStyle}>Hello, world!</h1>,
        <h2>学的不仅是技术，更是梦想！</h2>,
    ];
    var i = 1;
    return (
        <div>
            <div>{arr}</div>,
            <div>
                <h1>{i == 1 ? 'True!' : 'False'}</h1>
            </div>
            <h2>现在是 {props.date.toLocaleTimeString()}.</h2>
        </div>
    );
}
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <Clock date={new Date()} />
            </div>
        );
    }
}



function tick() {
    ReactDOM.render(
        <App />,
        document.getElementById('example')
    );
}

setInterval(tick, 1000);