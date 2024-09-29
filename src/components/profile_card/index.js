import React from 'react';

const ProfileCard = ({ image, name, surname, email, links }) => {
    return (
        <div 
            style={{ 
                background: 'transparent', 
                maxWidth: '30%',
                maxHeight: '50%',
                color: 'white',
                margin: '20px',
                border: '1px solid #565656', 
                borderRadius: '10px', 
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            {/* Name and surname left-aligned */}
            <h2 style={{ alignSelf: 'flex-start' }}> 
                <div>{name}</div>
                <div>{surname}</div>
            </h2>
    
            {/* Everything else centered */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <img src={image} style={{ width: '50%', height: 'auto', borderRadius: '15%' }} alt="profile" />
                </div>
    
                <h3 style={{ textAlign: 'center' }}>
                    <div>{email}</div>
                </h3>
    
                <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', justifyContent: 'center' }}>
                    {links.map((link, index) => (
                        <li key={index} style={{ margin: '0 10px' }}>
                            <a href={link.url}>
                                <img src={`/${link.label}.png`} alt={link.label} style={{ width: '30px', height: '30px' }} />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
    
};

export default ProfileCard;
