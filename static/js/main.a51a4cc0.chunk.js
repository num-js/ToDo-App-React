(this["webpackJsonpToDo-App"]=this["webpackJsonpToDo-App"]||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(1),r=a.n(l),c=a(7),s=a(3),d=a(4),u=a(8),i=a(5),m=a(9),p=(a(15),a(6));function T(e){var t=e.allTodos.map((function(t){return o.a.createElement("div",{className:"list",key:t.key},o.a.createElement("p",{className:"shadow"},o.a.createElement("input",{type:"text",value:t.text,id:t.key,onChange:function(a){return e.updateTodo(a.target.value,t.key)}}),o.a.createElement("span",{className:"deleteIcon fa fa-trash",onClick:function(){e.deleteTodo(t.key)}})))}));return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,o.a.createElement(p.a,null,t)))}a(16);var f=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(i.a)(t).call(this))).inputHandeler=function(t){e.setState({currentTodo:{text:t.target.value,key:Date.now()}})},e.saveTodo=function(t){t.preventDefault();var a=e.state.currentTodo;""!==a.text&&e.setState({allTodos:[a].concat(Object(c.a)(e.state.allTodos)),currentTodo:{text:"",key:""}})},e.updateTodo=function(t,a){var n=e.state.allTodos;n.map((function(e){e.key===a&&(e.text=t)})),e.setState({allTodos:n})},e.deleteTodo=function(t){var a=e.state.allTodos.filter((function(e){return e.key!==t}));e.setState({allTodos:a})},e.state={allTodos:[],currentTodo:{text:"",key:""}},e}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{align:"",className:"container col-lg-3 col-md-8 col-sm-12 shadow"},o.a.createElement("div",{className:"secJumbotron shadow"},o.a.createElement("form",{id:"to-do-form",onSubmit:this.saveTodo},o.a.createElement("input",{type:"text",placeholder:"ToDo...",value:this.state.currentTodo.text,onChange:this.inputHandeler}),o.a.createElement("button",{type:"submit"},"Add")),o.a.createElement("div",{className:""},o.a.createElement(T,{allTodos:this.state.allTodos,updateTodo:this.updateTodo,deleteTodo:this.deleteTodo})))))}}]),t}(n.Component);r.a.render(o.a.createElement(o.a.Fragment,null,o.a.createElement(f,null)),document.getElementById("todoDiv"))}},[[10,1,2]]]);
//# sourceMappingURL=main.a51a4cc0.chunk.js.map