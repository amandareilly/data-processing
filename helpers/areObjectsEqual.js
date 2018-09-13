function areObjectsEqual(a, b) {
    const aProperties = Object.getOwnPropertyNames(a);
    const bProperties = Object.getOwnPropertyNames(b);

    // if the property arrays are not the same
    // the arrays cannot be the same
    if(aProperties != bProperties) {
        return false;
    }


}