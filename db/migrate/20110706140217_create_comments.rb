# -*- encoding : utf-8 -*-
class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.integer :article_id
      t.text :body
      t.integer :user_id

      t.timestamps
    end
  end
end
