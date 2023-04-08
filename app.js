const parent = React.createElement("div", {
    id: "parent"
}, [React.createElement("div", {
        id: "child"
    }), [React.createElement("p", {}, "hey i'm a paragraph"), React.createElement("p", {}, "hey i'm a 2nd paragraph")],
    React.createElement("div", {
        id: "child2"
    }), [React.createElement("p", {}, "hey i'm a paragraph"), React.createElement("p", {}, "hey i'm a 2nd paragraph")]
]);

const set_data = ReactDOM.createRoot(document.getElementById("getdata"));
set_data.render(parent);

const heading = React.createElement("h1", {
    id: "heading"
}, "hi i'm here !!!");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);