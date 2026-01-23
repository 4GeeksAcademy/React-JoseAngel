import React from "react";

const Cards = () => {
    return (
        <div className="ContainerCards">
            <div className="row">
                <div className="col-lg">
                    <div className="card" style={{ width: "18rem;" }}>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAM1BMVEXMzMyVlZWTk5PPz8/GxsbKysqzs7O7u7uXl5ekpKTAwMC3t7ebm5uioqKoqKi+vr6tra3EbKeZAAAD90lEQVR4nO3Z7ZKrKBCAYQFB/Ih6/1e73SCKJnMqtbVVh6l9nz8xmaRLWqCB6ToAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwP+Tc+4Pb/9GoL+in87bdX7eQ3/dvb6dvg/UXYH6UAd6xm1dv9i1z5duNtYYux5/cUPUt6P/LpCPy1B+Gaw11u7l7T1u+xZjTM6JG2yUm4/l5idtiInm9VUct0sajstwBNrdp7itc6s0ejh6dTTmte022jRenGRrGaR5dv6m1/cx2uDKpRk3iWz7D3Fbp4+wtMTNNsbeuZe0QD/Rpzs5SZpZvom0GxPPyxhlbpGcru49buu8PtHjWm9a2pDS5FMPSm3ov3u++rXS3yQZkmcXNDVvcVunIyee93mMEi99XidLaZnOB07SFq4KchRV96y1oznnHS+BNnmdZFhO73EbJ3dtz/b2JncInx+zzg/ahOMxZy6M4yjtHeQl1EmZrE5L+ZPt6BBHhEfcxunDXbrJH02Rx5rmxJwEaYrRp61jaDx/IX+zrzQ32LFqn87HL7/vKYk6f6TOl5PwiNs4bfa4mJif3qBToV7IvUt7S89P80r5hXvJl6LXwlLnxA365d7aNKeGMivn0feI27ZUH6Ra5HVELg9d7j2aE5sfrxaUq/BoOuw8W7P09XyZSsx01JmSE5dy8ozbOOkiJi6alD7nZNF2/jEn+jUzvsxtzZLWaL0Ulp9yUsdtm5RPedxaMlOt/NBP0ti550RbKr1rqRvn49H4399PhlwkZcKMUe5V5oQ87sef55MuL/NyrT0/kTFopDqHc+zkjlHmk3vcpqUO4tMOLd10XR/2qu6MVd1Jlhjv3UT3RCEEXaIEf9Ud/1539tZzUgbFlmeOD+sTnTTccm/Kez+RNZoMHqOztdEIuj7RJPzC9Unq43px5MTJ89QkaBu2Kxfy8X0TGNN8Un3gbVZy8ljHPuK2bcjPs96XjHmu1T1/2fxNtmxvE6kxZl3vdWdINl23DTpocjZTqXdvcdumdUfqgjah2gifS6spnSLUG5lOT8xkQEybpus5DM5NgJbm6J0vg+4Rt2nSXNneTeO5N9MDkzCacn4ijYhBT0GGsyl+zr1H12jzY5N7bYy0Ni/hdZ6f3OO2rZdG69RYlul6sGbO4zH9c3pbbVJ6PXcLLpWsekSpKye6eku/nD/GbZqbFr3b6wB2WvTg9Nopp7f1iWGvc2l/vd6iLbakzw3psLHMOc+4jRv2NUzVvU7z5qu93TQP/rYUGYZZR5KTl+dZiAvrOpfrbpu37se4jfsP//Hyy/6HAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOBf+wcMGSC+b1HZgwAAAABJRU5ErkJggg==" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg">
                    <div className="card" style={{ width: "18rem;" }}>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAM1BMVEXMzMyVlZWTk5PPz8/GxsbKysqzs7O7u7uXl5ekpKTAwMC3t7ebm5uioqKoqKi+vr6tra3EbKeZAAAD90lEQVR4nO3Z7ZKrKBCAYQFB/Ih6/1e73SCKJnMqtbVVh6l9nz8xmaRLWqCB6ToAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwP+Tc+4Pb/9GoL+in87bdX7eQ3/dvb6dvg/UXYH6UAd6xm1dv9i1z5duNtYYux5/cUPUt6P/LpCPy1B+Gaw11u7l7T1u+xZjTM6JG2yUm4/l5idtiInm9VUct0sajstwBNrdp7itc6s0ejh6dTTmte022jRenGRrGaR5dv6m1/cx2uDKpRk3iWz7D3Fbp4+wtMTNNsbeuZe0QD/Rpzs5SZpZvom0GxPPyxhlbpGcru49buu8PtHjWm9a2pDS5FMPSm3ov3u++rXS3yQZkmcXNDVvcVunIyee93mMEi99XidLaZnOB07SFq4KchRV96y1oznnHS+BNnmdZFhO73EbJ3dtz/b2JncInx+zzg/ahOMxZy6M4yjtHeQl1EmZrE5L+ZPt6BBHhEfcxunDXbrJH02Rx5rmxJwEaYrRp61jaDx/IX+zrzQ32LFqn87HL7/vKYk6f6TOl5PwiNs4bfa4mJif3qBToV7IvUt7S89P80r5hXvJl6LXwlLnxA365d7aNKeGMivn0feI27ZUH6Ra5HVELg9d7j2aE5sfrxaUq/BoOuw8W7P09XyZSsx01JmSE5dy8ozbOOkiJi6alD7nZNF2/jEn+jUzvsxtzZLWaL0Ulp9yUsdtm5RPedxaMlOt/NBP0ti550RbKr1rqRvn49H4399PhlwkZcKMUe5V5oQ87sef55MuL/NyrT0/kTFopDqHc+zkjlHmk3vcpqUO4tMOLd10XR/2qu6MVd1Jlhjv3UT3RCEEXaIEf9Ud/1539tZzUgbFlmeOD+sTnTTccm/Kez+RNZoMHqOztdEIuj7RJPzC9Unq43px5MTJ89QkaBu2Kxfy8X0TGNN8Un3gbVZy8ljHPuK2bcjPs96XjHmu1T1/2fxNtmxvE6kxZl3vdWdINl23DTpocjZTqXdvcdumdUfqgjah2gifS6spnSLUG5lOT8xkQEybpus5DM5NgJbm6J0vg+4Rt2nSXNneTeO5N9MDkzCacn4ijYhBT0GGsyl+zr1H12jzY5N7bYy0Ni/hdZ6f3OO2rZdG69RYlul6sGbO4zH9c3pbbVJ6PXcLLpWsekSpKye6eku/nD/GbZqbFr3b6wB2WvTg9Nopp7f1iWGvc2l/vd6iLbakzw3psLHMOc+4jRv2NUzVvU7z5qu93TQP/rYUGYZZR5KTl+dZiAvrOpfrbpu37se4jfsP//Hyy/6HAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOBf+wcMGSC+b1HZgwAAAABJRU5ErkJggg==" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg">
                    <div className="card" style={{ width: "18rem;" }}>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAM1BMVEXMzMyVlZWTk5PPz8/GxsbKysqzs7O7u7uXl5ekpKTAwMC3t7ebm5uioqKoqKi+vr6tra3EbKeZAAAD90lEQVR4nO3Z7ZKrKBCAYQFB/Ih6/1e73SCKJnMqtbVVh6l9nz8xmaRLWqCB6ToAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwP+Tc+4Pb/9GoL+in87bdX7eQ3/dvb6dvg/UXYH6UAd6xm1dv9i1z5duNtYYux5/cUPUt6P/LpCPy1B+Gaw11u7l7T1u+xZjTM6JG2yUm4/l5idtiInm9VUct0sajstwBNrdp7itc6s0ejh6dTTmte022jRenGRrGaR5dv6m1/cx2uDKpRk3iWz7D3Fbp4+wtMTNNsbeuZe0QD/Rpzs5SZpZvom0GxPPyxhlbpGcru49buu8PtHjWm9a2pDS5FMPSm3ov3u++rXS3yQZkmcXNDVvcVunIyee93mMEi99XidLaZnOB07SFq4KchRV96y1oznnHS+BNnmdZFhO73EbJ3dtz/b2JncInx+zzg/ahOMxZy6M4yjtHeQl1EmZrE5L+ZPt6BBHhEfcxunDXbrJH02Rx5rmxJwEaYrRp61jaDx/IX+zrzQ32LFqn87HL7/vKYk6f6TOl5PwiNs4bfa4mJif3qBToV7IvUt7S89P80r5hXvJl6LXwlLnxA365d7aNKeGMivn0feI27ZUH6Ra5HVELg9d7j2aE5sfrxaUq/BoOuw8W7P09XyZSsx01JmSE5dy8ozbOOkiJi6alD7nZNF2/jEn+jUzvsxtzZLWaL0Ulp9yUsdtm5RPedxaMlOt/NBP0ti550RbKr1rqRvn49H4399PhlwkZcKMUe5V5oQ87sef55MuL/NyrT0/kTFopDqHc+zkjlHmk3vcpqUO4tMOLd10XR/2qu6MVd1Jlhjv3UT3RCEEXaIEf9Ud/1539tZzUgbFlmeOD+sTnTTccm/Kez+RNZoMHqOztdEIuj7RJPzC9Unq43px5MTJ89QkaBu2Kxfy8X0TGNN8Un3gbVZy8ljHPuK2bcjPs96XjHmu1T1/2fxNtmxvE6kxZl3vdWdINl23DTpocjZTqXdvcdumdUfqgjah2gifS6spnSLUG5lOT8xkQEybpus5DM5NgJbm6J0vg+4Rt2nSXNneTeO5N9MDkzCacn4ijYhBT0GGsyl+zr1H12jzY5N7bYy0Ni/hdZ6f3OO2rZdG69RYlul6sGbO4zH9c3pbbVJ6PXcLLpWsekSpKye6eku/nD/GbZqbFr3b6wB2WvTg9Nopp7f1iWGvc2l/vd6iLbakzw3psLHMOc+4jRv2NUzVvU7z5qu93TQP/rYUGYZZR5KTl+dZiAvrOpfrbpu37se4jfsP//Hyy/6HAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOBf+wcMGSC+b1HZgwAAAABJRU5ErkJggg==" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg">
                    <div className="card" style={{ width: "18rem;" }}>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAM1BMVEXMzMyVlZWTk5PPz8/GxsbKysqzs7O7u7uXl5ekpKTAwMC3t7ebm5uioqKoqKi+vr6tra3EbKeZAAAD90lEQVR4nO3Z7ZKrKBCAYQFB/Ih6/1e73SCKJnMqtbVVh6l9nz8xmaRLWqCB6ToAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwP+Tc+4Pb/9GoL+in87bdX7eQ3/dvb6dvg/UXYH6UAd6xm1dv9i1z5duNtYYux5/cUPUt6P/LpCPy1B+Gaw11u7l7T1u+xZjTM6JG2yUm4/l5idtiInm9VUct0sajstwBNrdp7itc6s0ejh6dTTmte022jRenGRrGaR5dv6m1/cx2uDKpRk3iWz7D3Fbp4+wtMTNNsbeuZe0QD/Rpzs5SZpZvom0GxPPyxhlbpGcru49buu8PtHjWm9a2pDS5FMPSm3ov3u++rXS3yQZkmcXNDVvcVunIyee93mMEi99XidLaZnOB07SFq4KchRV96y1oznnHS+BNnmdZFhO73EbJ3dtz/b2JncInx+zzg/ahOMxZy6M4yjtHeQl1EmZrE5L+ZPt6BBHhEfcxunDXbrJH02Rx5rmxJwEaYrRp61jaDx/IX+zrzQ32LFqn87HL7/vKYk6f6TOl5PwiNs4bfa4mJif3qBToV7IvUt7S89P80r5hXvJl6LXwlLnxA365d7aNKeGMivn0feI27ZUH6Ra5HVELg9d7j2aE5sfrxaUq/BoOuw8W7P09XyZSsx01JmSE5dy8ozbOOkiJi6alD7nZNF2/jEn+jUzvsxtzZLWaL0Ulp9yUsdtm5RPedxaMlOt/NBP0ti550RbKr1rqRvn49H4399PhlwkZcKMUe5V5oQ87sef55MuL/NyrT0/kTFopDqHc+zkjlHmk3vcpqUO4tMOLd10XR/2qu6MVd1Jlhjv3UT3RCEEXaIEf9Ud/1539tZzUgbFlmeOD+sTnTTccm/Kez+RNZoMHqOztdEIuj7RJPzC9Unq43px5MTJ89QkaBu2Kxfy8X0TGNN8Un3gbVZy8ljHPuK2bcjPs96XjHmu1T1/2fxNtmxvE6kxZl3vdWdINl23DTpocjZTqXdvcdumdUfqgjah2gifS6spnSLUG5lOT8xkQEybpus5DM5NgJbm6J0vg+4Rt2nSXNneTeO5N9MDkzCacn4ijYhBT0GGsyl+zr1H12jzY5N7bYy0Ni/hdZ6f3OO2rZdG69RYlul6sGbO4zH9c3pbbVJ6PXcLLpWsekSpKye6eku/nD/GbZqbFr3b6wB2WvTg9Nopp7f1iWGvc2l/vd6iLbakzw3psLHMOc+4jRv2NUzVvU7z5qu93TQP/rYUGYZZR5KTl+dZiAvrOpfrbpu37se4jfsP//Hyy/6HAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOBf+wcMGSC+b1HZgwAAAABJRU5ErkJggg==" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Cards