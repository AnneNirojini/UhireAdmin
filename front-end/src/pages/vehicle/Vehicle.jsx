import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./vehicle.css";

export default function Vehicle() {
  return (
    <div className="vehicle">
      <div className="vehicleTitleContainer">
        <h1 className="vehicleTitle">Edit Vehicle</h1>
        <Link to="/vehicles">
          <button className="vehicleAddButton">Back</button>
        </Link>
      </div>
      <div className="vehicleContainer">
        <div className="vehicleShow">
          <div className="vehicleShowTop">
            <img
              src="https://res.cloudinary.com/drmy319ph/image/upload/v1634029303/UHire-vehicles/hs07bpie7ombmgiunnak.jpg"
              alt=""
              className="vehicleShowImg"
            />
            <div className="vehicleShowTopTitle">
              <span className="vehicleShowVehiclename">Jeya</span>
              <span className="vehicleShowVehicleTitle"> Vehicle Owner</span>
            </div>
          </div>
          <div className="vehicleShowBottom">
            <span className="vehicleShowTitle">Account Details</span>
            <div className="vehicleShowInfo">
              <PermIdentity className="vehicleShowIcon" />
              <span className="vehicleShowInfoTitle">Jeya</span>
            </div>
            <div className="vehicleShowInfo">
              <CalendarToday className="vehicleShowIcon" />
              <span className="vehicleShowInfoTitle">21.10.1997</span>
            </div>
            <span className="vehicleShowTitle">Contact Details</span>
            <div className="vehicleShowInfo">
              <PhoneAndroid className="vehicleShowIcon" />
              <span className="vehicleShowInfoTitle">+94 77 525 7454</span>
            </div>
            <div className="vehicleShowInfo">
              <MailOutline className="vehicleShowIcon" />
              <span className="vehicleShowInfoTitle">Jeya@gmail.com</span>
            </div>
            <div className="vehicleShowInfo">
              <LocationSearching className="vehicleShowIcon" />
              <span className="vehicleShowInfoTitle">Kilinochchi | Srilanka</span>
            </div>
          </div>
        </div>
        <div className="vehicleUpdate">
          <span className="vehicleUpdateTitle">Edit</span>
          <form className="vehicleUpdateForm">
            <div className="vehicleUpdateLeft">
              <div className="vehicleUpdateItem">
                <label>Vehiclename</label>
                <input
                  type="text"
                  placeholder="Jeya"
                  className="vehicleUpdateInput"
                />
              </div>
              <div className="vehicleUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Raj Jeya"
                  className="vehicleUpdateInput"
                />
              </div>
              <div className="vehicleUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="jeya@gmail.com"
                  className="vehicleUpdateInput"
                />
              </div>
              <div className="vehicleUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+94 77 525 7454"
                  className="vehicleUpdateInput"
                />
              </div>
              <div className="vehicleUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="Kilinochchi | Srilanka"
                  className="vehicleUpdateInput"
                />
              </div>
            </div>
            <div className="vehicleUpdateRight">
              <div className="vehicleUpdateUpload">
                <img
                  className="vehicleUpdateImg"
                  src="https://res.cloudinary.com/drmy319ph/image/upload/v1634029303/UHire-vehicles/hs07bpie7ombmgiunnak.jpg"
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className="vehicleUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="vehicleUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
