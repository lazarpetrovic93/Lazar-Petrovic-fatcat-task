import './styles.css';
import { Landing } from '@homework-task/components/landing/Landing';
import TaskPage from '@homework-task/components/TaskPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/task" element={<TaskPage />} />
            </Routes>
        </Router>
    );
};

export default App;
