import React, { Component } from 'react';
import DescriptionVideoCard from '../descriptionVideoCard/DescriptionVideoCard';
import SpotlightVideoCard from '../spotlightVideoCard/SpotlightVideoCard';
import PlusVideosCard from '../plusVideosCard/PlusVideosCard';

const styles = {
    spotlightVideoDiv: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
    },
    leftCard: {
        // width: "60%",
    },
    rightCard: {
        // width: "60%",
    },
}

class MainPage extends Component {
    render() {
        return (
            <div>
                <div style={styles.leftCard}>
                    <SpotlightVideoCard />
                    <div style={styles.spotlightVideoDiv}>
                        <DescriptionVideoCard/>
                    </div>
                </div>
                <div style={styles.rightCard}>
                    <PlusVideosCard />
                </div>
            </div>
        );
    }
}

export default MainPage;