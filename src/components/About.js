import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass";

const About = () => {
  return (
    <>
      <Outlet />

      <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div class="relative py-3 sm:max-w-xl sm:mx-auto">
          <div class="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
            <div class="max-w-md mx-auto">
              <div class="text-center">
                <h2 class="text-3xl font-semibold text-gray-800">About Us</h2>
                <p class="mt-2 text-sm text-gray-500">
                  Learn more about our company
                </p>
              </div>
              <div class="mt-4">
                <p class="text-base text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  eu est quis mauris tincidunt consequat ac ut nisi. Phasellus
                  eu eleifend metus. Morbi at scelerisque lorem, in placerat
                  nisi. In eu lobortis felis, a rhoncus tellus. Sed volutpat, ex
                  eu interdum pharetra, mi tellus pulvinar mi, ut consectetur
                  nisi elit in ligula. Ut quis massa semper, lobortis purus ac,
                  congue quam. Morbi eleifend scelerisque cursus. Nullam sed
                  nulla id quam fermentum malesuada id sed ligula. Aenean vel
                  dui a arcu consequat auctor. Mauris vel pharetra ipsum.
                </p>
                <p class="mt-4 text-base text-gray-700">
                  Integer et lacinia sapien. Duis sollicitudin risus et felis
                  cursus, nec lacinia ex tincidunt. Vestibulum elementum arcu
                  justo, ac lacinia dui molestie sed. In eu fringilla dui.
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Nunc consectetur fringilla
                  ullamcorper. Vestibulum mattis velit mauris, nec dignissim
                  lorem lobortis sit amet. Nam finibus auctor eleifend. Sed sed
                  tortor varius, placerat leo vitae, posuere justo.
                </p>
              </div>
              <div className="flex p-3 justify-center mt-5">
                <div className="m-5">
                  <img
                    className="w-20 h-20 rounded-full"
                    src="https://xsgames.co/randomusers/avatar.php?g=female"
                    alt="Team Member 1"
                  />
                  <h3>John Doe</h3>
                  <p>Co-founder</p>
                </div>
                <div className="m-5">
                  <img
                    className="w-20 h-20 rounded-full text-center"
                    src="https://xsgames.co/randomusers/avatar.php?g=male"
                    alt="Team Member 2"
                  />
                  <h3>Jane Smith</h3>
                  <p>Manager</p>
                </div>
                <div className="m-5">
                  <img
                    className="w-20 h-20 rounded-full"
                    src="https://randomuser.me/api/portraits/women/76.jpg"
                    alt="Team Member 3"
                  />
                  <h3>Mike Johnson</h3>
                  <p>Head Chef</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
