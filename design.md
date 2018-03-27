# UX Design Document

*This document serves as a record of the agreed design of the User Experience for the hip alignment application.*

The application will run on Safari on an iPad.

The application consists of a number of views -

## Views

### Initial View

Upon opening the app, the user will see a title and some explanatory text about the app.
On this view, there will also be a button, with a call to action to take or upload an image.

### Image Input View

After tapping the image upload button, the user can select from the iPad's camera, or to upload an image from the file store. If the user elects to use the camera, the application *may* ask for their permission in a dialog.

Once the image has been input, it will be shown to the user, with the full image visible across most of the screen.

The user will be able to discard the image, or to continue with the image, via clicking on one of two buttons.

### Manipulation View

Once the user has opted to continue with the image, they will be presented with a view that shows the full image on the page.

There will also be buttons to -

* Invert the image's colors
* Zoom in and out
* Enter an inklination angle in whole integers between 1 and 359 degrees.
* Upload a new image

There will be a prompt for the user to add teardrops to the image.

#### Inverting the image's colors

The button to invert the image's colors will be a toggle.
On tapping, the image will show with the colors inverted. i.e. black => white, white => black

#### Zooming

When clicking on the zoom buttons, the image will be zoomed in or out with the transform origin being the center of the visible image. Any lines or teardrops on the image will zoom with the image while retaining their size.

#### Entering an Inklination angle

When the user enters an inklination angle, a line will appear, starting at the midpoint between the two teardrops, inclined at the entered angle from the line between the teardrops.

If there are no teardrops entered, then this entry box will be disabled.

#### Manipulating the image position

The user will be able to drag and zoom the image with their fingers. Any lines or teardrops on the image will zoom with the image while retaining their size.

#### Adding teardrops

The user can add the first teardrop by tapping the image in the location that they want the teardrop to be located. The second teardrop can be added by tapping again, in another location. Any additional taps will not do anything.

Teardrops can be moved by dragging the teardrop to a new location. The target area will be an accomodating radius around the teardrop.

Once the second teardrop has been added, a line will be drawn between the teardrops, and the Inklination angle entry box will be enabled.

#### Inklination line

The user will be able to drag the inklination line across the teardrop line. Their will be an accomodating target area around the line to allow the user to drag the line without precise finger control.  The target area of the line will be underneath the target areas of the teardrops, meaning a user drag will give priority to the teardrops if the target areas of the teardrop and the Inklination line intersect.

Any changes to the entered angle will change the appearance of the Inklination line. The intersection point with the teardrop line will remain the same. The angle of the line will change.

The Inklination line will not be able to be flipped by a manual button. The user can change the angle entry to achieve this result.

#### Uploading a new image

The user can click on a button to upload a new image while in the Manipulation View.  Clicking on this button will start the Image Input View flow again.  The Inklination angle and teardrop positions will be retaining. It is expected that the user will want to rearrange the teardrop positions with a new image.

## Other

* The application will work in both portrait and landscape modes.
* All data will be lost if the user restarts the application.
