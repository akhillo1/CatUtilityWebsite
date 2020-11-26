import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import CatImages from '../catImage';
import * as service from '../service';

service.setFavourite = (val) => {
    return new Promise((resolve, reject) => {        
        resolve({ data: 'test' });
        reject({ error: 'not found.' });
    })
}

service.setVoteChange = (val) => {
    return new Promise((resolve, reject) => {        
        resolve({ message: 'SUCCESS' });
        reject({ error: 'not found.' });
    })
}

describe('App', () => {

    let catImageRenderer;
    beforeEach(() => {
        const props = {
            catInfo: {url: ''},
            votes: 5
        }
        catImageRenderer = render(<CatImages {...props}/>);
    });

    test('renders cat image component', () => {
        expect(catImageRenderer).toBeDefined();
    });

    test('Favourite click method - color change', () => {
        const favButton = catImageRenderer.getByTestId('favouriteButton');
        expect(favButton).not.toHaveStyle('color: red');
        fireEvent.click(favButton);
        expect(favButton).toHaveStyle('color: red');
        fireEvent.click(favButton);
        expect(favButton).not.toHaveStyle('color: red');
    });

    test('Vote up button - Color change', () => {
        const voteUpButton = catImageRenderer.getByTestId('voteupButton');
        expect(voteUpButton).not.toHaveStyle('color: blue');
        fireEvent.click(voteUpButton);
        expect(voteUpButton).toHaveStyle('color: blue');
        fireEvent.click(voteUpButton);
        expect(voteUpButton).toHaveStyle('color: blue');
    });

    test('Vote down button - Color change', () => {
        const votedownButton = catImageRenderer.getByTestId('votedownButton');
        expect(votedownButton).not.toHaveStyle('color: blue');
        fireEvent.click(votedownButton);
        expect(votedownButton).toHaveStyle('color: blue');
        fireEvent.click(votedownButton);
        expect(votedownButton).toHaveStyle('color: blue');
    });
});