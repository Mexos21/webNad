import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/services/auth-service.service';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.scss'],
})
export class CreateGameComponent implements OnInit {
  file: File;
  imageSrc: string | ArrayBuffer =
    '../assets/img/missing-image.jpg';
  createGameForm: FormGroup;
  platforms: string[] = [
    'PC',
    'PS2',
    'PS3',
    'PS4',
    'PS5',
    'XBOX 360',
    'XBOX ONE',
    'NDS',
    'N3DS',
    'WII',
    'WII U',
    'SWITCH',
  ];

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.loggedUser();

    this.createGameForm = this.fb.group({
      name: ['', Validators.required],
      state: ['', Validators.required],
      platform: ['', Validators.required],
      year: ['', Validators.required, Validators.min(1995)],
      image: ['', Validators.required],
      fileSource: ['', Validators.required],
    });
  }

  get name() {
    return this.createGameForm.get('name');
  }

  get state() {
    return this.createGameForm.get('state');
  }

  get platform() {
    return this.createGameForm.get('platform');
  }

  get year() {
    return this.createGameForm.get('year');
  }

  get image() {
    return this.createGameForm.get('image');
  }

  get formControls() {
    return this.createGameForm.controls;
  }

  onFileChange(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.imageSrc = reader.result as string;

        this.createGameForm.patchValue({
          fileSource: reader.result,
        });
      };
    }
  }
}
