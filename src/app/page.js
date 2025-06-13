import Banner from './Components/Banner';
import CallToAction from './Components/CallToAction';
import FeaturedPosts from './Components/FeaturedPosts';
import RecentPosts from './Components/RecentPosts';

export default function Home() {
  return (
    <div className="pt-4">
      <Banner />
      <FeaturedPosts />
      <RecentPosts />
      <CallToAction />
    </div>
  );
}
