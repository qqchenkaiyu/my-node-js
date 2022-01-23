class App extends React.Component {
    constructor() {
        super();

        this.state = {
            name: "菜鸟教程",
            site: "https://www.runoob.com",
            date: new Date()
        }
    }
    render() {
        return (
            <div>
                <Toggle />
                <Clock date={this.state.date} />
                <MyComponent/>
            </div>
        );
    }
}

function UserGreeting(props) {
    return <h1>欢迎回来!</h1>;
}

function GuestGreeting(props) {
    return <h1>请先注册。</h1>;
}

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }


    render() {
        var result = [<button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>,this.state.isToggleOn?<UserGreeting />:<GuestGreeting />]
        return result;
    }
}

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: props.date};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h2>现在是 {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}
class MyComponent extends React.Component {
    handleClick() {
        // 使用原生的 DOM API 获取焦点
        this.refs.myInput.focus();
    }
    render() {
        //  当组件插入到 DOM 后，ref 属性添加一个组件的引用于到 this.refs
        return (
            <div>
                <input type="text" ref="myInput" />
                <input
                    type="button"
                    value="点我输入框获取焦点"
                    onClick={this.handleClick.bind(this)}
                />
            </div>
        );
    }
}
ReactDOM.render(
    <App />,
    document.getElementById('example')
);