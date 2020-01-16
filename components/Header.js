import React from "react";
import { connect } from "react-redux";
import { getCartList, addToCart } from "../store/actions";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <header>
        <NavLink exact activeClassName="active" to="/Cart">
          <img
            className="cart-img"
            src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA0NjkuMzMzIDQ2OS4zMzMiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ2OS4zMzMgNDY5LjMzMzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxnPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGQ9Ik00MzQuOTc5LDQyLjY2N0g4NS4zMzNjLTEuMDUzLDAtMi4wMTQsMC4zOTYtMy4wMDEsMC42OTNsLTguNTk0LTI4LjI0MUM3MS4wMDUsNi4xMzgsNjIuNzIxLDAsNTMuMzMzLDBIMTAuNjY3ICAgICBDNC43NzYsMCwwLDQuNzc2LDAsMTAuNjY3VjMyYzAsNS44OTEsNC43NzYsMTAuNjY3LDEwLjY2NywxMC42NjdoMjYuODY1bDY2LjY0NiwyMTkuMDFsLTI0Ljg5MSwyOS4wMzkgICAgIGMtOS44MzgsMTEuNDc3LTE0LjI2OCwyNy4yOTEtOS43NCw0MS43MTNjNS43OTEsMTguNDQ1LDIyLjA3LDMwLjIzNyw0MC44MzksMzAuMjM3SDQxNmM1Ljg5MSwwLDEwLjY2Ny00Ljc3NiwxMC42NjctMTAuNjY3ICAgICB2LTIxLjMzM2MwLTUuODkxLTQuNzc2LTEwLjY2Ny0xMC42NjctMTAuNjY3SDExMC4zODVsMzMuODEzLTM5LjQ0OGMwLjg1LTAuOTkyLDEuNDc1LTIuMTEyLDIuMTItMy4yMTloMjA2LjcwMyAgICAgYzE2LjUzMywwLDMxLjU3OC05LjU0OCwzOC42MTgtMjQuNTA3bDc0LjQzNC0xNTguMTdjMi4xMzUtNC41NTIsMy4yNi05LjYwNCwzLjI2LTE0LjYxNXYtMy4wMjEgICAgIEM0NjkuMzMzLDU4LjA0OCw0NTMuOTUyLDQyLjY2Nyw0MzQuOTc5LDQyLjY2N3oiIGZpbGw9IiMwMDAwMDAiLz4KCQkJPGNpcmNsZSBjeD0iMTI4IiBjeT0iNDI2LjY2NyIgcj0iNDIuNjY3IiBmaWxsPSIjMDAwMDAwIi8+CgkJCTxjaXJjbGUgY3g9IjM4NCIgY3k9IjQyNi42NjciIHI9IjQyLjY2NyIgZmlsbD0iIzAwMDAwMCIvPgoJCTwvZz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K"
          />
        </NavLink>
        <NavLink exact activeClassName="active" to="/ShoppingCart">
          <span>
            <img
              className="cart-img-filled"
              src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgo8cGF0aCBzdHlsZT0iZmlsbDojRjBGQUEwOyIgZD0iTTUxMiwyNTZjMCwxNDEuMzg1LTExNC42MTUsMjU2LTI1NiwyNTZTMCwzOTcuMzg1LDAsMjU2UzExNC42MTUsMCwyNTYsMFM1MTIsMTE0LjYxNSw1MTIsMjU2eiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojRUJGNTgyOyIgZD0iTTE3NiwzMzN2NjJjMCwyLjc2MS0yLjIzOSw1LTUsNUg2MWMtMi43NjEsMC01LTIuMjM5LTUtNXYtNjJjMC0yLjc2MSwyLjIzOS01LDUtNWgxMTAgIEMxNzMuNzYxLDMyOCwxNzYsMzMwLjIzOSwxNzYsMzMzeiBNMTcxLDI0MEg2MWMtMi43NjEsMC01LDIuMjM5LTUsNXY2MmMwLDIuNzYxLDIuMjM5LDUsNSw1aDExMGMyLjc2MSwwLDUtMi4yMzksNS01di02MiAgQzE3NiwyNDIuMjM5LDE3My43NjEsMjQwLDE3MSwyNDB6IE0zMDcsMzI4SDE5N2MtMi43NjEsMC01LDIuMjM5LTUsNXY2MmMwLDIuNzYxLDIuMjM5LDUsNSw1aDExMGMyLjc2MSwwLDUtMi4yMzksNS01di02MiAgQzMxMiwzMzAuMjM5LDMwOS43NjEsMzI4LDMwNywzMjh6IE0zMDcsMjQwSDE5N2MtMi43NjEsMC01LDIuMjM5LTUsNXY2MmMwLDIuNzYxLDIuMjM5LDUsNSw1aDExMGMyLjc2MSwwLDUtMi4yMzksNS01di02MiAgQzMxMiwyNDIuMjM5LDMwOS43NjEsMjQwLDMwNywyNDB6IE00NTEsMzI4SDM0MWMtMi43NjEsMC01LDIuMjM5LTUsNXY2MmMwLDIuNzYxLDIuMjM5LDUsNSw1aDExMGMyLjc2MSwwLDUtMi4yMzksNS01di02MiAgQzQ1NiwzMzAuMjM5LDQ1My43NjEsMzI4LDQ1MSwzMjh6IE00NTEsMjQwSDM0MWMtMi43NjEsMC01LDIuMjM5LTUsNXY2MmMwLDIuNzYxLDIuMjM5LDUsNSw1aDExMGMyLjc2MSwwLDUtMi4yMzksNS01di02MiAgQzQ1NiwyNDIuMjM5LDQ1My43NjEsMjQwLDQ1MSwyNDB6Ii8+CjxwYXRoIHN0eWxlPSJmaWxsOiNGMkMyMzA7IiBkPSJNNDUyLjU2MSw0MjBjLTQ2Ljk2LDU2LjIyMi0xMTcuNTc4LDkyLTE5Ni41NjEsOTJzLTE0OS42MDEtMzUuNzc4LTE5Ni41NjEtOTJINDUyLjU2MXoiLz4KPHBhdGggc3R5bGU9ImZpbGw6I0QyOTY1MDsiIGQ9Ik00MTUsMjV2MTMwYzAsMi43NjEtMi4yMzksNS01LDVIMjYwYy0yLjc2MSwwLTUtMi4yMzktNS01VjI1YzAtMi43NjEsMi4yMzktNSw1LTVoMTUwICBDNDEyLjc2MSwyMCw0MTUsMjIuMjM5LDQxNSwyNXoiLz4KPHBhdGggc3R5bGU9ImZpbGw6I0FBNjQzMjsiIGQ9Ik00NDUsMjYyLjVMMTk1LDMwMFYxNTBoMjUwVjI2Mi41eiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojRjdEMTM5OyIgZD0iTTMwMCw2MGgtNDVWNDBoNDVjMi43NjEsMCw1LDIuMjM5LDUsNXYxMEMzMDUsNTcuNzYxLDMwMi43NjEsNjAsMzAwLDYweiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojRTNBNjAwOyIgZD0iTTQwMCw0NDcuNWMwLDUuNTIzLTQuNDc3LDEwLTEwLDEwSDI5MGMtNS41MjMsMC0xMC00LjQ3Ny0xMC0xMHM0LjQ3Ny0xMCwxMC0xMGgxMDAgIEMzOTUuNTIzLDQzNy41LDQwMCw0NDEuOTc3LDQwMCw0NDcuNXogTTIwMCw0MzcuNUg3NS41MTNjNy4xMzQsNy4wOTUsMTQuNjc1LDEzLjc4LDIyLjYwMSwyMEgyMDBjNS41MjMsMCwxMC00LjQ3NywxMC0xMCAgUzIwNS41MjMsNDM3LjUsMjAwLDQzNy41eiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojRkY2NjMzOyIgZD0iTTI5MCwyNDBoLTk1di02MGg5NWMyLjc2MSwwLDUsMi4yMzksNSw1djUwQzI5NSwyMzcuNzYxLDI5Mi43NjEsMjQwLDI5MCwyNDB6Ii8+CjxwYXRoIHN0eWxlPSJmaWxsOiM0MTQ2Njk7IiBkPSJNNDg3LDc3LjVIMjI0Ljk5MWMtMC4wMTEsMC0wLjAyMywwLTAuMDM0LDBoLTkyLjE1bC04LjEwNi0zMi40MjUgIGMtMS4yMDktNC44MzctNS43NTYtNy45NTMtMTAuNTY4LTcuNTI3Yy0wLjMwNy0wLjAyOS0wLjYxOC0wLjA0OC0wLjkzMy0wLjA0OEgzNC44Yy01LjQxMiwwLTkuOCw0LjQ3Ny05LjgsMTBzNC4zODcsMTAsOS44LDEwICBoNzIuMzkzbDguMDM0LDMyLjEzOEwxNTQuNTcsMjk3LjE3bC0xOS4wNTYsNTcuMTY4Yy0xLjc0Nyw1LjIzOSwxLjA4NSwxMC45MDIsNi4zMjUsMTIuNjQ5YzEuMDQ5LDAuMzUsMi4xMTUsMC41MTYsMy4xNjQsMC41MTYgIGM0LjE4NywwLDguMDg5LTIuNjUsOS40ODUtNi44NDFsMTcuNjY0LTUyLjk5MmwzMTYuMTEzLTQwLjI1YzQuOTk0LTAuNjM2LDguNzM3LTQuODg1LDguNzM3LTkuOTJ2LTU5Ljg3NmMwLTAuMDAxLDAtMC4wMDIsMC0wLjAwMiAgTDQ5Nyw4Ny41QzQ5Nyw4MS45NzcsNDkyLjUyMyw3Ny41LDQ4Nyw3Ny41eiBNMTM3LjA3Myw5Ny41aDc4LjkyNGw1LjAyNyw0Ny43NmwtNzQuNDgyLDIuMTlMMTM3LjA3Myw5Ny41eiBNMTUwLjMxNSwxNjcuMzQ4ICBsNzIuODEtMi4xNDFsNC44MDcsNDUuNjYzbC02OC4xOTcsNi4xNjJMMTUwLjMxNSwxNjcuMzQ4eiBNMTczLjA3MiwyODcuMzkybC05LjU5Ni01MC42MTdsNjYuNTQ5LTYuMDE0bDUuMDMsNDcuNzg2ICBjMC4wMzMsMC4zMTYsMC4wODIsMC42MjgsMC4xNDMsMC45MzRMMTczLjA3MiwyODcuMzkyeiBNMjM2LjEwNyw5Ny41aDc4LjkwNWMwLDAuMTk1LTAuMDA3LDAuMzksMC4wMDUsMC41ODdsMi42MDgsNDQuMzMxICBsLTc2LjU1MiwyLjI1MUwyMzYuMTA3LDk3LjV6IE0yNDMuMTcyLDE2NC42MTdsNzUuNjI3LTIuMjI0bDIuMzU2LDQwLjA1M2wtNzMuMzA0LDYuNjI0TDI0My4xNzIsMTY0LjYxN3ogTTI1NC45NzIsMjc2Ljk2MyAgYy0wLjAwOS0wLjE3LTAuMDEtMC4zMzktMC4wMjgtMC41MWwtNC45OTktNDcuNDkybDcyLjM4NS02LjU0MWwyLjY4NCw0NS42MjVMMjU0Ljk3MiwyNzYuOTYzeiBNMzM1LjAxNyw5Ny41SDQwNXY0Mi4zNDkgIGwtNjcuMzc1LDEuOTgxTDMzNS4wMTcsOTcuNXogTTMzOC44LDE2MS44MDRsNjYuMi0xLjk0N3YzNS4wMTFsLTYzLjkxNSw1Ljc3NkwzMzguOCwxNjEuODA0eiBNMzQ0LjksMjY1LjUxM2wtMi42NDEtNDQuODkzICBMNDA1LDIxNC45NXY0Mi41NWMwLDAuMTIxLDAuMDE0LDAuMjM4LDAuMDE4LDAuMzU4TDM0NC45LDI2NS41MTN6IE00NzcsMjQ4LjY5MmwtNTIsNi42MjF2LTQyLjE3bDUyLTQuNjk5VjI0OC42OTJ6IE00NzcsMTg4LjM2MyAgbC01Miw0LjY5OVYxNTkuMjdsNTItMS41MjlWMTg4LjM2M3ogTTQ3NywxMzcuNzMxbC01MiwxLjUyOVY5Ny41aDUyVjEzNy43MzF6Ii8+CjxwYXRoIHN0eWxlPSJmaWxsOiNGRjY2MzM7IiBkPSJNNDQ1LDM0NXYyMGMwLDIuNzYxLTIuMjM5LDUtNSw1SDE0MGMtMi43NjEsMC01LTIuMjM5LTUtNXYtMjBjMC0yLjc2MSwyLjIzOS01LDUtNWgzMDAgIEM0NDIuNzYxLDM0MCw0NDUsMzQyLjIzOSw0NDUsMzQ1eiBNNzguNzUsMzBoLTQyLjVDMjUuODk0LDMwLDE3LjUsMzguMzk1LDE3LjUsNDguNzVsMCwwYzAsMTAuMzU1LDguMzk1LDE4Ljc1LDE4Ljc1LDE4Ljc1aDQyLjUgIGMxMC4zNTUsMCwxOC43NS04LjM5NSwxOC43NS0xOC43NWwwLDBDOTcuNSwzOC4zOTUsODkuMTA1LDMwLDc4Ljc1LDMweiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojRkY1MDE5OyIgZD0iTTQwNSwzNDIuNXY3MGMwLDIuNzYxLTIuMjM5LDUtNSw1aC0yMGMtMi43NjEsMC01LTIuMjM5LTUtNXYtNzBjMC0yLjc2MSwyLjIzOS01LDUtNWgyMCAgQzQwMi43NjEsMzM3LjUsNDA1LDMzOS43MzksNDA1LDM0Mi41eiBNMjEwLDMzNy41aC0yMGMtMi43NjEsMC01LDIuMjM5LTUsNXY3MGMwLDIuNzYxLDIuMjM5LDUsNSw1aDIwYzIuNzYxLDAsNS0yLjIzOSw1LTV2LTcwICBDMjE1LDMzOS43MzksMjEyLjc2MSwzMzcuNSwyMTAsMzM3LjV6Ii8+CjxwYXRoIHN0eWxlPSJmaWxsOiM1MDFFMEY7IiBkPSJNNDI1LDQyMi41YzAsMTkuMzMtMTUuNjcsMzUtMzUsMzVzLTM1LTE1LjY3LTM1LTM1czE1LjY3LTM1LDM1LTM1UzQyNSw0MDMuMTcsNDI1LDQyMi41eiBNMjAwLDM4Ny41ICBjLTE5LjMzLDAtMzUsMTUuNjctMzUsMzVzMTUuNjcsMzUsMzUsMzVzMzUtMTUuNjcsMzUtMzVTMjE5LjMzLDM4Ny41LDIwMCwzODcuNXoiLz4KPHBhdGggc3R5bGU9ImZpbGw6I0I5NzgzRDsiIGQ9Ik00MTAsNDIyLjVjMCwxMS4wNDYtOC45NTQsMjAtMjAsMjBzLTIwLTguOTU0LTIwLTIwczguOTU0LTIwLDIwLTIwICBDNDAxLjA0NSw0MDIuNSw0MTAsNDExLjQ1NCw0MTAsNDIyLjV6IE0yMDAsNDAyLjVjLTExLjA0NiwwLTIwLDguOTU0LTIwLDIwczguOTU0LDIwLDIwLDIwczIwLTguOTU0LDIwLTIwUzIxMS4wNDUsNDAyLjUsMjAwLDQwMi41ICB6Ii8+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo="
            />
          </span>
          <span className="badge">
            {this.props.cartList.reduce((acc, item) => {
              return acc + item.count;
            }, 0)}
          </span>
        </NavLink>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  cartList: state.cartList
});

export default connect(
  mapStateToProps,
  { getCartList, addToCart }
)(Header);
