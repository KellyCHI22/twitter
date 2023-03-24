import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import AdminPage from './pages/AdminPage';
import AdminTweetList from './components/AdminTweetList';
import AdminUserList from './components/AdminUserList';
import SettingsPage from './pages/SettingsPage';
import AdminLayout from './components/layouts/AdminLayout';
import TweetLayout from './components/layouts/TweetLayout';
import TweetPage from './pages/TweetPage';
import ReplyPage from './pages/ReplyPage';
import UserPage from './pages/UserPage';
import TweetList from './components/TweetList';
import FollowList from './components/FollowList';
import { tweets, replies } from './dummyData';

const basename = import.meta.env.VITE_PUBLIC_URL;

function App() {
  return (
    <BrowserRouter basename={basename}>
      <GlobalStyle />
      <Routes>
        <Route path="*" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="admin">
          <Route index element={<AdminPage />} />
          <Route element={<AdminLayout />}>
            <Route path="tweets" element={<AdminTweetList />} />
            <Route path="users" element={<AdminUserList />} />
          </Route>
        </Route>
        <Route element={<TweetLayout />}>
          <Route path="tweets">
            <Route index element={<TweetPage />} />
            <Route path=":id" element={<ReplyPage />} />
          </Route>
          <Route element={<UserPage />}>
            <Route path="users/:id">
              <Route
                path="tweets"
                element={<TweetList type="tweet" tweets={tweets} />}
              />
              <Route
                path="replies"
                element={<TweetList type="reply" tweets={replies} />}
              />
              <Route
                path="likes"
                element={<TweetList type="like" tweets={tweets} />}
              />
              <Route
                path="followers"
                element={<FollowList type="followers" />}
              />
              <Route
                path="followings"
                element={<FollowList type="followings" />}
              />
            </Route>
          </Route>
          <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
