import React from 'react';
import './home.css';
import ProfileCard from '../../components/profile_card/index'
import profile from '../../components/images/profile.jpg'

const Home = () => {
    return (
        <div className="full-page">
            <ProfileCard
                image={profile}
                name="Atakan"
                surname="Divan"
                email="atakandivan@gmail.com"
                links={[
                    { label: 'linkedin', url: 'https://www.linkedin.com/' },
                    { label: 'github', url: ' ' }
                ]}
            >
            </ProfileCard>
        </div>
    );
};

export default Home;
