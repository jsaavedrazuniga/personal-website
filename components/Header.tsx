interface HeaderProps {
  url: URL;
  navigationItems?: Array<{
    name: string;
    path: string;
    description?: string;
  }>;
}

export default function Header(props: HeaderProps) {
  const navigationItems = props.navigationItems || [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Articles", path: "/articles" },
    { name: "Podcast", path: "/podcast" },
  ];

  return (
    <header className="flex justify-center content-center my-4 lg:my-6">
      <div></div>
      <div>
        <nav>
          <ul className="flex justify-center content-center space-x-6">
            {navigationItems.map((i) => (
              <li>
                <a
                  href={i.path}
                  className={props.url.pathname == i.path ||
                      (props.url.pathname.startsWith(i.path) && i.path != "/")
                    ? "border-b-2 border-primary-200 font-[450]"
                    : "hover:border-b-2 hover:border-primary-200 transition duration-200"}
                >
                  {i.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div></div>
    </header>
  );
}
