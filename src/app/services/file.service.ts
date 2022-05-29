import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { saveAs } from 'file-saver';
import { map, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { File } from '../models/file.model';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  private readonly api = `${environment.api}/files`;

  constructor(private http: HttpClient) {}

  get(name: string, url:string, type: string) {
    return this.http.get(url, {responseType: 'arraybuffer'})
    .pipe(
      tap((content) => {
        const blob = new Blob([content], {type});
        saveAs(blob, name);
      }),
      map(() => true)
    );
  }

  upload(file: Blob) {
    const dto = new FormData();
    dto.set('file', file);
    return this.http.post<File>(this.api, dto,{
      // this is in case the backend required to specify the content type to form data
      headers: {
        'content-type': 'multipart/form-data',
      }
    })
  }
}
