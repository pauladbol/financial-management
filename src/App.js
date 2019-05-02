import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Financial Management</h1>
        <Router>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/userlogin" component={UserLoginPage}></Route>
          <Route path="/userregister" component={UserRegisterPage}></Route>
          <Route path="/expenseregister" component={ExpenseRegisterPage}></Route>
          <Route path="/expenseslist" component={ExpensesListPage}></Route>
        </Router>
      </header>
    </div>
  );
}

export default App;
