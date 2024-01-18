export const UI_API = {
  _generateFormData: (payload) => {
    function createFormData(formData, object) {
      if (Array.isArray(object) && object.length > 0) {
        object.forEach((key) => formData.append("files", key));
      } else {
        for (const key in object) {
          if (Array.isArray(object[key]) && object[key].length > 0) {
            object[key].forEach((file) => formData.append(key, file));
          } else if (
            typeof object[key] === "object" &&
            object[key] &&
            Object.keys(object[key]).length > 0
          ) {
            createFormData(formData, object[key]);
          } else if (object[key] !== null || object[key] > 0 || object[key]) {
            formData.append(key, object[key]);
          }
        }
      }
    }
    const formData = new FormData();
    createFormData(formData, payload);
    return formData;
  },

  _returnAddress: (addressObject) => {
    let returnAddress = {
      street_number: "",
      street_address: "",
      address: addressObject.results[0].formatted_address,
      geoCode: {
        ...addressObject.results[0]?.geometry?.location,
      },
      place_id: addressObject.results[0]?.place_id,
      postalcode: "",
      area: "",
      tehsil: "",
      country: "",
    };
    addressObject.results?.forEach((element) => {
      element?.address_components?.forEach((item) => {
        if (item.types.some((el) => el === "administrative_area_level_1")) {
          returnAddress = { ...returnAddress, province: item.long_name };
        } else if (
          item.types.some((el) => el === "administrative_area_level_2")
        ) {
          returnAddress = { ...returnAddress, district: item.long_name };
        } else if (
          item.types.some((el) => el === "administrative_area_level_3")
        ) {
          returnAddress = { ...returnAddress, tehsil: item.long_name };
        } else if (item.types.some((el) => el === "locality")) {
          returnAddress = { ...returnAddress, city: item.long_name };
        } else if (item.types.some((el) => el === "sublocality")) {
          returnAddress = { ...returnAddress, area: item.long_name };
        } else if (item.types.some((el) => el === "postal_code")) {
          returnAddress = { ...returnAddress, postalcode: item.long_name };
        } else if (
          item.types.some((el) => el === "street_address" || el === "route")
        ) {
          returnAddress = {
            ...returnAddress,
            street_address: item.long_name || "",
          };
        } else if (item.types.some((el) => el === "street_number")) {
          returnAddress = {
            ...returnAddress,
            street_number: item.long_name || "",
          };
        } else if (item.types.some((el) => el === "country")) {
          returnAddress = {
            ...returnAddress,
            country: item.long_name || "",
            country_short_name: item?.short_name,
          };
        }
      });
    });
    return returnAddress;
  },

  _returnSingleAddress: (addressObject) => {
    let latitude = addressObject[0]?.geometry?.location.lat();
    let longitude = addressObject[0]?.geometry?.location.lng();
    let returnAddress = {
      street_number: "",
      street_address: "",
      address: addressObject[0]?.formatted_address,
      geoCode: {
        lat: latitude,
        lng: longitude,
      },
      place_id: addressObject[0]?.place_id,
      postalcode: "",
      area: "",
      tehsil: "",
      country: "",
    };
    addressObject?.forEach((element) => {
      element?.address_components?.forEach((item) => {
        if (item.types.some((el) => el === "administrative_area_level_1")) {
          returnAddress = { ...returnAddress, province: item.long_name };
        } else if (
          item.types.some((el) => el === "administrative_area_level_2")
        ) {
          returnAddress = { ...returnAddress, district: item.long_name };
        } else if (
          item.types.some((el) => el === "administrative_area_level_3")
        ) {
          returnAddress = { ...returnAddress, tehsil: item.long_name };
        } else if (item.types.some((el) => el === "locality")) {
          returnAddress = { ...returnAddress, city: item.long_name };
        } else if (item.types.some((el) => el === "sublocality")) {
          returnAddress = { ...returnAddress, area: item.long_name };
        } else if (item.types.some((el) => el === "postal_code")) {
          returnAddress = { ...returnAddress, postalcode: item.long_name };
        } else if (
          item.types.some((el) => el === "street_address" || el === "route")
        ) {
          returnAddress = {
            ...returnAddress,
            street_address: item.long_name || "",
          };
        } else if (item.types.some((el) => el === "street_number")) {
          returnAddress = {
            ...returnAddress,
            street_number: item.long_name || "",
          };
        } else if (item.types.some((el) => el === "country")) {
          returnAddress = {
            ...returnAddress,
            country: item.long_name || "",
            country_short_name: item?.short_name,
          };
        }
      });
    });
    return returnAddress;
  },

  _returnMoveMarkerAddress: (addressObject) => {
    let returnAddress = {
      street_number: "",
      street_address: "",
      address: addressObject[0]?.formatted_address,
      geoCode: {
        lat: addressObject[0]?.geometry?.location?.lat(),
        lng: addressObject[0]?.geometry?.location?.lng(),
      },
      place_id: addressObject[0]?.place_id,
      postalcode: "",
      area: "",
      tehsil: "",
      country: "",
    };
    addressObject?.forEach((element) => {
      element?.address_components?.forEach((item) => {
        if (item.types.some((el) => el === "administrative_area_level_1")) {
          returnAddress = { ...returnAddress, province: item.long_name };
        } else if (
          item.types.some((el) => el === "administrative_area_level_2")
        ) {
          returnAddress = { ...returnAddress, district: item.long_name };
        } else if (
          item.types.some((el) => el === "administrative_area_level_3")
        ) {
          returnAddress = { ...returnAddress, tehsil: item.long_name };
        } else if (item.types.some((el) => el === "locality")) {
          returnAddress = { ...returnAddress, city: item.long_name };
        } else if (item.types.some((el) => el === "sublocality")) {
          returnAddress = { ...returnAddress, area: item.long_name };
        } else if (item.types.some((el) => el === "postal_code")) {
          returnAddress = { ...returnAddress, postalcode: item.long_name };
        } else if (
          item.types.some(
            (el) => el === "neighborhood" || el === "street_address"
          )
        ) {
          returnAddress = {
            ...returnAddress,
            street_address: item.long_name || "",
          };
        } else if (
          item.types.some((el) => el === "street_number" || el === "route")
        ) {
          returnAddress = {
            ...returnAddress,
            street_number: item.long_name || "",
          };
        } else if (item.types.some((el) => el === "country")) {
          returnAddress = {
            ...returnAddress,
            country: item.long_name || "",
            country_short_name: item?.short_name,
          };
        }
      });
    });
    return returnAddress;
  },

  _findCustomPackageSize: (needle, packageSizesList) => {
    let numbers = [...packageSizesList];
    if (needle.id === 1) {
      numbers.sort((a, b) => {
        return (
          Math.abs(needle.weight - a.weight) -
          Math.abs(needle.weight - b.weight)
        );
      });
    } else if (needle.id === 2) {
      numbers.sort((a, b) => {
        return (
          Math.abs(needle.length - a.length) -
            Math.abs(needle.length - b.length) &&
          Math.abs(needle.width - a.width) - Math.abs(needle.width - b.width) &&
          Math.abs(needle.height - a.height) -
            Math.abs(needle.height - b.height)
        );
      });
    } else {
      numbers.sort((a, b) => {
        return (
          Math.abs(needle.weight - a.weight) -
            Math.abs(needle.weight - b.weight) &&
          Math.abs(needle.length - a.length) -
            Math.abs(needle.length - b.length) &&
          Math.abs(needle.width - a.width) - Math.abs(needle.width - b.width) &&
          Math.abs(needle.height - a.height) -
            Math.abs(needle.height - b.height)
        );
      });
    }

    return numbers[0];
  },

  _fileUploadSizeAndType: (files) => {
    // for checking type and size
    for (let i in files) {
      var file_type = files[i].type;
      console.log({ file_type });
      var file_size = files[i].size;
      console.log({ file_size });
      if (file_type === "text/CSV") {
        console.log("CSV file");
      } else {
        console.log("provide valid file type");
      }
    }
  },

  _fileUploadAuthentication: (files) => {
    // for authentication of file upload
    for (let i in files) {
      var file_size = files[i].size;
      var file_size_in_unit;

      if (file_size < 1024) {
        console.log(file_size + " Bytes");
        file_size_in_unit = file_size;
      } else if (file_size < 1048576) {
        console.log("KB:" + (file_size / 1024).toFixed(3) + " KB");
        file_size_in_unit = (file_size / 1024).toFixed(3);
      } else if (file_size < 1073741824) {
        console.log("MB:" + (file_size / 1048576).toFixed(2) + " MB");
        file_size_in_unit = (file_size / 1048576).toFixed(2);
        if (file_size_in_unit > 25) {
          console.log("File size is greater than 25MB");
        }
      }
    }
  },
};
