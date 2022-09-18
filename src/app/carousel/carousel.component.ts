import { Component, HostListener, OnInit } from '@angular/core';

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

    mobileView: boolean = false;
    images: any[] = [];
    responsiveOptions: any[] = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '560px',
            numVisible: 4
        }
    ];

    constructor() { }

    ngOnInit(): void {

        this.images = [
            {
                "previewImageSrc": "../../assets/images/S1.jpg",
                "thumbnailImageSrc": "../../assets/images/S1_t.jpg",
                "alt": "Description for Image 1",
                "title": "Title 1"
            },
            {
                "previewImageSrc": "../../assets/images/S2.jpg",
                "thumbnailImageSrc": "../../assets/images/S2_t.jpg",
                "alt": "Description for Image 2",
                "title": "Title 2"
            },
            {
                "previewImageSrc": "../../assets/images/S3.jpg",
                "thumbnailImageSrc": "../../assets/images/S3_t.jpg",
                "alt": "Description for Image 3",
                "title": "Title 3"
            },
            {
                "previewImageSrc": "../../assets/images/S4.jpg",
                "thumbnailImageSrc": "../../assets/images/S4_t.jpg",
                "alt": "Description for Image 4",
                "title": "Title 4"
            },
            {
                "previewImageSrc": "../../assets/images/S5.jpg",
                "thumbnailImageSrc": "../../assets/images/S5_t.jpg",
                "alt": "Description for Image 5",
                "title": "Title 5"
            },
            {
                "previewImageSrc": "../../assets/images/S6.jpg",
                "thumbnailImageSrc": "../../assets/images/S6_t.jpg",
                "alt": "Description for Image 6",
                "title": "Title 6"
            }];
    }

    @HostListener('window:resize', ['$event'])
    onWindowResize() {
        if (window.innerWidth <= 560) {
            this.mobileView = true;
        } else {
            this.mobileView = false;
        }

    }

}
