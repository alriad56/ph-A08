import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function MainLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      {isLoading && (
        <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-purple-600 animate-pulse" />
      )}
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;