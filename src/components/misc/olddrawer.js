import React from "react";

const olddrawer = () => {
  return (
    <>
      <AppBar position="fixed" open={open} color="secondary_2" elevation={0}>
        <Toolbar sx={{ boxShadow: "0px 5px 30px rgba(220, 224, 249, 0.3);" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            
          </IconButton>
          <div className="flex justify-end items-center w-full px-2 md:px-[7rem] lg:px-[9rem] xl:px-[10rem] 2xl:px-[12.6rem]">
            {/* {!open ? (
          <div>
            <img
              src={require("../../assets/images/home_page.png")}
              alt="homepage boon4"
              className="m-3 sm:w-[10.188rem] w-24"
            />
          </div>
        ) : (
          <div></div>
        )} */}
            <button>
              <img
                alt="bell"
                src={bellIcon}
                className="m-3 sm:w-[1.888rem] w-6"
              />
            </button>
            <div className="relative mx-8">
              <button>
                {profileImage ? (
                  <img
                    alt="user profile"
                    src={profileImage}
                    className="m-3 w-[3rem] h-[3rem] rounded-full"
                  />
                ) : (
                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25 0C11.25 0 0 11.25 0 25C0 38.75 11.25 50 25 50C38.75 50 50 38.75 50 25C50 11.25 38.75 0 25 0ZM25 7.5C29.25 7.5 32.5 10.75 32.5 15C32.5 19.25 29.25 22.5 25 22.5C20.75 22.5 17.5 19.25 17.5 15C17.5 10.75 20.75 7.5 25 7.5ZM25 43C18.75 43 13.25 39.7501 10 35C10 30 20 27.25 25 27.25C30 27.25 40 30 40 35C36.75 39.75 31.25 43 25 43Z"
                      fill="black"
                      fillOpacity="0.2"
                    />
                  </svg>
                )}
              </button>
              {accountVerified === "verified" ? (
                <div className="absolute top-11 right-3">
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 37 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="18.5" cy="18.5" r="18.5" fill="white" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.5109 35.5204C18.4628 35.5204 18.4366 35.5204 18.3885 35.4942C10.6568 33.322 5.65234 28.2432 5.65234 22.6094V10.2054C5.65234 9.9781 5.80532 9.80327 6.03259 9.77705C7.5973 9.54977 9.79576 8.89417 12.0947 7.95884C14.8002 6.87054 17.1997 5.5331 18.2093 4.57155C18.3885 4.39672 18.6639 4.39672 18.8169 4.57155C19.8265 5.55933 22.226 6.87054 24.9052 7.95884C27.2042 8.89417 29.4027 9.57599 30.9674 9.77705C31.1947 9.80327 31.3476 10.0043 31.3476 10.2054V22.6094C31.3476 28.2432 26.3694 33.2957 18.6377 35.4942C18.5896 35.5204 18.5634 35.5204 18.5109 35.5204Z"
                      fill="#5FD3AE"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.511 32.4649C18.463 32.4649 18.4367 32.4649 18.3887 32.4387C12.1735 30.6948 8.17871 26.6257 8.17871 22.0801V12.1761C8.17871 11.9489 8.33169 11.774 8.55896 11.7478C9.76964 11.5948 11.5136 11.066 13.358 10.3055C15.5084 9.44883 17.4009 8.38675 18.2095 7.63062C18.3887 7.45142 18.664 7.47764 18.817 7.63062C19.5993 8.38675 21.4962 9.4226 23.6422 10.3055C25.4867 11.066 27.2306 11.5948 28.4412 11.7478C28.6685 11.774 28.8215 11.9751 28.8215 12.1761V22.0801C28.8215 26.6257 24.8311 30.6685 18.6159 32.4387C18.5897 32.4649 18.5635 32.4649 18.511 32.4649Z"
                      fill="#A1E5CF"
                    />
                  </svg>
                </div>
              ) : null}
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <div className="hidden lg:block">
        <Drawer
          variant="permanent"
          open={open}
          PaperProps={{
            sx: {
              border: "none",
              boxShadow: "0px 5px 30px rgba(220, 224, 249, 0.3);",
            },
          }}
        >
          <DrawerHeader>
            <DrawerHeaderText>
              <img
                src={require("../../assets/images/home_page.png")}
                alt="homepage boon4"
                className="m-3 sm:w-[10.188rem] w-24"
              />
            </DrawerHeaderText>
            {/* <IconButton onClick={handleDrawerClose}>
                  {theme.direction === "rtl" ? (
                    <ChevronRightIcon />
                  ) : (
                    <ChevronLeftIcon />
                  )}
                </IconButton> */}
          </DrawerHeader>
          {/* <Divider /> */}
          <div className="">
            <List>
              <ListItem disablePadding sx={{ display: "block" }}>
                {sidebarRoutes1.map((item) => (
                  <Link to={item.route} key={item.id}>
                    <ListItemButton
                      sx={{
                        // minHeight: 48,
                        minHeight: 55,
                        justifyContent: open ? "initial" : "center",
                        px: 2.5,
                        color: "#CF2D39",
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          justifyContent: "center",
                        }}
                      >
                        {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                        <img
                          alt="hello"
                          src={item.icon}
                          style={{
                            filter:
                              item.route === pathname
                                ? "invert(21%) sepia(65%) saturate(2953%) hue-rotate(339deg) brightness(98%) contrast(89%)"
                                : "none",
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary={item.title}
                        sx={{
                          opacity: open ? 1 : 0,
                          color:
                            item.route === pathname
                              ? "#CF2D39"
                              : "rgba(0, 0, 0, 1)",
                        }}
                      />
                    </ListItemButton>
                  </Link>
                ))}
              </ListItem>
            </List>
            {/* <Divider /> */}
            <List
              sx={{
                marginTop: "2rem",
              }}
            >
              <ListItem disablePadding sx={{ display: "block" }}>
                {sidebarRoutes2.map((item) => (
                  <Link
                    key={item.id}
                    to={item.route === "/logout" ? pathname : item.route}
                    onClick={() => {
                      if (item.title === "Logout") {
                        dispatch(logout());
                        localStorage.removeItem("jwt_access_token");
                      } else return;
                    }}
                  >
                    <ListItemButton
                      key={item.id}
                      sx={{
                        minHeight: 48,
                        minHeight: 55,
                        justifyContent: open ? "initial" : "center",
                        px: 2.5,
                        pointerEvents: "",
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          justifyContent: "center",
                        }}
                      >
                        {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                        <img
                          src={item.icon}
                          alt="hello"
                          style={{
                            filter:
                              item.route === pathname
                                ? "invert(21%) sepia(65%) saturate(2953%) hue-rotate(339deg) brightness(98%) contrast(89%)"
                                : "none",
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary={item.title}
                        sx={{
                          opacity: open ? 1 : 0,
                          color:
                            item.route === pathname
                              ? "#CF2D39"
                              : "rgba(0, 0, 0, 1)",
                        }}
                      />
                    </ListItemButton>
                  </Link>
                ))}
              </ListItem>
            </List>
          </div>
        </Drawer>
      </div>
    </>
  );
};

export default olddrawer;
